import React from 'react'
// components
import { ActionIcon, Flex, Image, Stack, Text } from '@mantine/core'
import MoreVertIcon from '@mui/icons-material/MoreVert'
// types
import { Podcast } from '../types/general'

type CardProps = {
  item: Podcast
  onCardClick: (url: string) => void
}

const removeHtmlElements = (text: string) => {
  const filtered = text.replace(/(<([^>]+)>)/gi, ' ')
  return filtered.trim()
}

const formattedDescription = (text: string, size: number) => {
  const result = removeHtmlElements(text)
  return result.length > size ? result.slice(0, size - 1) + '…' : result
}

export default function Card({ item, onCardClick }: CardProps) {
  return (
    <Flex onClick={() => onCardClick(item.enclosure.url)} align="center" justify="space-between">
      <Flex align={'center'} gap={'1rem'}>
        <Image maw={70} height={70} radius={'md'} src={item.image} alt="Something wnet wrong" />

        <Stack sx={{ gap: 'unset' }}>
          <Text sx={{ lineHeight: '1.2rem' }} fw={700}>
            {formattedDescription(item.title.__cdata, 50)}
          </Text>
          <Text sx={{ lineHeight: '1.2rem' }} c="dimmed">
            {formattedDescription(item.creator.__cdata, 29)}
          </Text>
        </Stack>
      </Flex>

      <ActionIcon>
        <MoreVertIcon />
      </ActionIcon>
    </Flex>
  )
}
