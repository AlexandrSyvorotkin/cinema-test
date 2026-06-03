import { useNavigate } from 'react-router'
import { useResponseMode } from '../context/ResponseModeContext'
import { RESPONSE_MODES, type ResponseMode } from '../types/responseMode'
import './ResponseModeSelector.css'

export function ResponseModeSelector() {
  const { mode, setMode } = useResponseMode()
  const navigate = useNavigate()

  const handleChange = (next: ResponseMode) => {
    setMode(next)
    if (next === 'sun') {
      navigate('/sun')
      return
    }
    navigate('/')
  }

  return (
    <div className="response-mode" role="group" aria-label="Режим ответа поиска">
      <label className="response-mode__label" htmlFor="response-mode-select">
        Режим ответа
      </label>
      <select
        id="response-mode-select"
        className="response-mode__select"
        value={mode}
        onChange={(e) => handleChange(e.target.value as ResponseMode)}
      >
        {RESPONSE_MODES.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}
