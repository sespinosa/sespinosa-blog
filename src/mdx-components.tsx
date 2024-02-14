import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (<div className='mt-4 mx-auto prose prose-invert'>{children}</div>),
    ...components,
  }
};