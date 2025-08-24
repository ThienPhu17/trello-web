import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={ (theme) => ({
      backgroundColor: 'primary.main',
      width: '100%',
      height: `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.appBoardHeight})`,
      display: 'flex',
      alignItems: 'center'
    })}>
        Board Content
    </Box>
  )
}

export default BoardContent