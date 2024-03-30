import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Icons } from './icons';
import { useState } from 'react';

interface DescriptionTooltipProps {
  tooltipText: string;
}

export const InfoTooltip = ({ tooltipText }: DescriptionTooltipProps) => {
  const [open, setOpen] = useState(false);
  const delayDuration = 700;

  const onOpenChange = () => {
    const newValue: boolean = !open;

    setOpen(newValue);
    // if new value is true, set a timeout to close the tooltip after delayDuration
    if (newValue) {
      setTimeout(() => {
        setOpen(false);
      }, delayDuration);
    }
  };
  return (
    <Tooltip open={open} onOpenChange={onOpenChange} delayDuration={delayDuration}>
      <TooltipTrigger asChild>
        <Icons.InfoCircledIcon onClick={() => setOpen(!open)} />
      </TooltipTrigger>
      <TooltipContent className="w-[90vw] sm:w-auto sm:max-w-xs">
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
};
