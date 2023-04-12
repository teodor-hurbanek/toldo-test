import React from 'react'
// components
import { Box, Button, Stack } from '@mantine/core'
import StopIcon from '@mui/icons-material/Stop'

type RecordButtonProps = {
  recording: boolean
  onToggleRecording: () => void
}

export default function RecordButton({ recording, onToggleRecording }: RecordButtonProps) {
  return (
    <Box
      sx={{ position: 'fixed', bottom: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}
      h={100}
      mx="auto"
    >
      <Stack>
        <Button onClick={onToggleRecording} color="red" radius={'xl'} leftIcon={recording ? <StopIcon /> : undefined}>
          Record
        </Button>
      </Stack>
    </Box>
  )
}
