import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Icons } from './icons';

interface DescriptionTooltipProps {
  tooltipText: string;
}

export const DescriptionTooltip = ({ tooltipText }: DescriptionTooltipProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Icons.InfoCircledIcon />
    </TooltipTrigger>
    <TooltipContent>
      <p>{tooltipText}</p>
    </TooltipContent>
  </Tooltip>
);
