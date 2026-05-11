import { Route, Routes } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import About from './routes/about/about.component'
import Projects from './routes/project/project.component'
import SupportTicketAnalysis from './routes/project/support-ticket-analysis/support-ticket-analysis.component'
import LlmResponseEvaluation from './routes/project/llm-response-evaluation/llm-response-evaluation.component'
import AiAssistedSupportWorkflow from './routes/project/ai-assisted-support-workflow/ai-assisted-support-workflow.component'

const App = () => {
  return (
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
  )
}

export default App