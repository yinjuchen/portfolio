import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// App uses useLocation() internally (via the ScrollToTop helper), which only
// works inside a Router. In production this is provided by <BrowserRouter> in
// index.js, so tests need their own Router wrapper (MemoryRouter) too.
test('renders the homepage hero heading', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const heading = screen.getByText(
    /From Customer Support to AI-Enabled Technical Support/i
  );
  expect(heading).toBeInTheDocument();
});

test('renders the projects page, including the no-image case studies and learning projects', () => {
  render(
    <MemoryRouter initialEntries={['/projects']}>
      <App />
    </MemoryRouter>
  );

  // Case study without a screenshot — should render via the icon-based
  // .project-visual, not crash because imageUrl is null.
  expect(
    screen.getByText(/Support Ticket Analysis & Triage/i)
  ).toBeInTheDocument();

  // Learning project card — details are collapsed behind a toggle by default.
  expect(screen.getByText(/AI Tarot App/i)).toBeInTheDocument();
  expect(screen.queryByText(/Designed structured prompts/i)).not.toBeInTheDocument();
});
