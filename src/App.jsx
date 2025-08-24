import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectMode = event.target.value
    setMode(selectMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="lable-select-dark-light-mode">mode</InputLabel>
      <Select
        labelId="lable-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LightModeIcon fontSize="small"/> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon fontSize="small"/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small"/>System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={(theme) => ({
        backgroundColor: 'primary.light',
        width: '100%',
        height: theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      })}>
        <ModeSelect/>
      </Box>
      <Box sx={ (theme) => ({
        backgroundColor: 'primary.dark',
        width: '100%',
        height: theme.trello.appBoardHeight,
        display: 'flex',
        alignItems: 'center'
      })}>
        Board Bar
      </Box>
      <Box sx={ (theme) => ({
        backgroundColor: 'primary.main',
        width: '100%',
        height: `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.appBoardHeight})`,
        display: 'flex',
        alignItems: 'center'
      })}>
        Board Content
      </Box>
    </Container>
  )
}

export default App
