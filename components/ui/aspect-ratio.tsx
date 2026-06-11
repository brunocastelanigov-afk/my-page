"use client"

import { AspectRatio as AspectRatioPrimitive } from "radix-ui"

// Aqui, claramente o componente NÃO recebeu as variáveis de CSS, o que fez necessário todo o retrabalho.
function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
