import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import About from './routes/about/about.component'
import Projects from './routes/project/project.component'
import SupportTicketAnalysis from './routes/project/support-ticket-analysis/support-ticket-analysis.component'
import LlmResponseEvaluation from './routes/project/llm-response-evaluation/llm-response-evaluation.component'
import AiAssistedSupportWorkflow from './routes/project/ai-assisted-support-workflow/ai-assisted-support-workflow.component'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [pathname])

  return null
}

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />

          <Route
            path='projects/support-ticket-analysis'
            element={<SupportTicketAnalysis />}
          />

          <Route
            path='projects/ai-support-response-review'
            element={<LlmResponseEvaluation />}
          />

          <Route
            path='projects/ai-assisted-support-workflow'
            element={<AiAssistedSupportWorkflow />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App