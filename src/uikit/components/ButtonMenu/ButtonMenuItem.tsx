import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { BaseButtonProps, PolymorphicComponent, variants } from '../Button/types'
import { ButtonMenuItemProps } from './types'

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps['as']
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, 'button'> = styled(Button)<InactiveButtonProps>`
  background-color: #E8ECF0;
  color: #676397;
  width: 90px;
  &:hover {
    color: #676397;
  }
`

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, 'button'> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant="tertiary" {...props} />
  }

  return <Button as={as} variant={variant} {...props} style={{backgroundColor:"#676397", width: '90px'}} />
}

export default ButtonMenuItem
