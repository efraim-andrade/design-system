import { MultiStepContainer, Steps, Label, Step } from './styles'

export interface MultiStepProps {
  currentStep?: number
  size: number
}

export function MultiStep({ currentStep = 1, size }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step active={currentStep >= step} key={step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
