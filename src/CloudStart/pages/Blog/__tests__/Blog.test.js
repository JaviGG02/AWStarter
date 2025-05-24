import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Blog from '../index';
import * as blogService from '../services/blogService';

// Mock the blog service
jest.mock('../services/blogService', () => ({
  fetchAllPosts: jest.fn(),
  getUniqueTags: jest.fn(),
  filterPostsBySearch: jest.fn(),
  filterPostsByTopic: jest.fn(),
}));

// Mock components that are not needed for these tests
jest.mock('components/MKNavbar', () => {
  return function DummyNavbar() {
    return <div data-testid="navbar">Navbar</div>;
  };
});

jest.mock('examples/Footers/DefaultFooter', () => {
  return function DummyFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

const mockPosts = [
  {
    title: 'Test Post 1',
    date: '2023-01-01',
    excerpt: 'Test excerpt 1',
    image: '',
    link: '/test-1',
    author: 'Test Author',
    tags: ['aws', 'serverless'],
  },
  {
    title: 'Test Post 2',
    date: '2023-01-02',
    excerpt: 'Test excerpt 2',
    image: '',
    link: '/test-2',
    author: 'Test Author',
    tags: ['containers', 'aws'],
  },
];

describe('Blog Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    
    // Setup default mock implementations
    blogService.fetchAllPosts.mockResolvedValue(mockPosts);
    blogService.getUniqueTags.mockReturnValue(['aws', 'serverless', 'containers']);
    blogService.filterPostsBySearch.mockImplementation((posts, query) => {
      if (!query) return posts;
      return posts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
    });
    blogService.filterPostsByTopic.mockImplementation((posts, tag) => {
      if (tag === 'all') return posts;
      return posts.filter(post => 
        post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
      );
    });
  });

  test('renders loading state initially', () => {
    render(<Blog />);
    expect(screen.getByText('Loading blog posts...')).toBeInTheDocument();
  });

  test('renders blog posts after loading', async () => {
    render(<Blog />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
      expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    });
  });

  test('filters posts by search query', async () => {
    render(<Blog />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText('Search blog posts by title, content, or tags...');
    fireEvent.change(searchInput, { target: { value: 'serverless' } });

    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Post 2')).not.toBeInTheDocument();
    });
  });

  test('filters posts by topic', async () => {
    render(<Blog />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    });

    const containersTopic = screen.getByText('Containers');
    fireEvent.click(containersTopic);

    await waitFor(() => {
      expect(screen.queryByText('Test Post 1')).not.toBeInTheDocument();
      expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    });
  });

  test('handles error state', async () => {
    const errorMessage = 'Failed to fetch posts';
    blogService.fetchAllPosts.mockRejectedValue(new Error(errorMessage));

    render(<Blog />);

    await waitFor(() => {
      expect(screen.getByText(`Error loading blog posts: ${errorMessage}`)).toBeInTheDocument();
    });
  });

  test('displays no posts message when no results found', async () => {
    render(<Blog />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText('Search blog posts by title, content, or tags...');
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

    await waitFor(() => {
      expect(screen.getByText('No posts found matching your search')).toBeInTheDocument();
    });
  });
});