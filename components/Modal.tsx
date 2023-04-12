import React from 'react'
// components
import { Button, Center, Space, Text, Modal, useMantineTheme } from '@mantine/core'
import DownloadIcon from '@mui/icons-material/Download'

type ModalProps = {
  opened: boolean
  onClose: () => void
  onDownloadAudio: () => void
}

export default function TheModal({ opened, onClose, onDownloadAudio }: ModalProps) {
  const theme = useMantineTheme()

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Done!"
      centered
      overlayProps={{
        color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
    >
      <Text>Download your recorded audio by clicking the button below.</Text>
      <Space h="md" />
      <Center>
        <Button onClick={onDownloadAudio} radius={'xl'} leftIcon={<DownloadIcon />}>
          Download
        </Button>
      </Center>
    </Modal>
  )
}
