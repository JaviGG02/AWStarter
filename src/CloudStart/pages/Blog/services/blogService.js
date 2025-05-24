// Blog service for handling data fetching and manipulation
export const fetchMarkdownFile = async (slug) => {
  try {
    const response = await fetch(`/blog-content/${slug}/post.md`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.status}`);
    }
    
    const markdownContent = await response.text();
    
    // Parse front matter from markdown
    const frontMatterRegex = /^---\n([\s\S]*?)\n---\n/;
    const frontMatterMatch = markdownContent.match(frontMatterRegex);
    
    let frontMatter = {};
    let content = markdownContent;
    
    if (frontMatterMatch) {
      // Extract and parse front matter
      const frontMatterText = frontMatterMatch[1];
      frontMatterText.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
          const value = valueParts.join(':').trim();
          frontMatter[key.trim()] = value;
        }
      });
      
      // Remove front matter from content
      content = markdownContent.replace(frontMatterRegex, '');
    }
    
    // Use the excerpt from front matter if available, otherwise generate one
    let excerpt = frontMatter.excerpt;
    if (!excerpt) {
      const excerptMatch = content.trim().match(/^(.*?)(?:\n\n|\n#)/s);
      excerpt = excerptMatch ? excerptMatch[1].trim() : content.substring(0, 150) + "...";
    }
    
    return {
      title: frontMatter.title || "Untitled Post",
      date: frontMatter.date || "",
      excerpt: excerpt,
      image: frontMatter.featured_image || "",
      link: `/CloudStart/blog/${slug}`,
      folder: slug,
      markdownFile: "post.md",
      author: frontMatter.author || "",
      tags: frontMatter.tags ? frontMatter.tags.replace(/[\[\]]/g, '').split(',').map(tag => tag.trim()) : [],
      content: content
    };
  } catch (err) {
    console.error(`Error fetching blog post ${slug}:`, err);
    return null;
  }
};

export const fetchAllPosts = async (blogPostSlugs) => {
  try {
    const postsPromises = blogPostSlugs.map(slug => fetchMarkdownFile(slug));
    const posts = await Promise.all(postsPromises);
    
    // Filter out any null results (failed fetches)
    const validPosts = posts.filter(post => post !== null);
    
    // Sort posts by date (newest first)
    validPosts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
    
    return validPosts;
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    throw err;
  }
};

export const getUniqueTags = (posts) => {
  const allTags = posts.flatMap(post => post.tags);
  return Array.from(new Set(allTags));
};

export const filterPostsBySearch = (posts, query) => {
  if (query.trim() === "") {
    return posts;
  }

  const searchQuery = query.toLowerCase();
  return posts.filter(post => {
    const titleMatch = post.title.toLowerCase().includes(searchQuery);
    const tagMatch = post.tags.some(tag => tag.toLowerCase().includes(searchQuery));
    const excerptMatch = post.excerpt.toLowerCase().includes(searchQuery);
    
    return titleMatch || tagMatch || excerptMatch;
  });
};

export const filterPostsByTopic = (posts, tag) => {
  if (tag === "all") {
    return posts;
  }
  
  return posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
};