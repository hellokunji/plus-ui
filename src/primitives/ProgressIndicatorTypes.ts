export type StepType = {
  key: number;
  label?: string;
};

export type ProgressIndicatorType = {
  noOfSteps: number;
  currentStep: number;
  variant: 'linear' | 'linearWithSteps' | 'tabbed' | 'progressDots';
  steps?: StepType[];
};

export type IndicatorType = {
  noOfSteps: number;
  currentStep: number;
  steps?: StepType[];
};

export type BreadCrumb = {
  name: string;
  url: string;
  type: 'internal' | 'external';
  id: number;
};
