import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, Spinner } from '@my/ui'
import { ChevronDown, ChevronUp, Github } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">GitHub UI</H1>
        <Paragraph ta="center">
          Inicia sesión con GitHub de forma fácil y sencilla haciendo click en el botón.
        </Paragraph>
        <Separator />
      </YStack>
      <XStack>
        <Button href='https://news.ycombinator.com/item?id=34186742' icon={Github} color={'$color12'} >Iniciar Sesión con GitHub</Button>
      </XStack>
    </YStack>
  )
}