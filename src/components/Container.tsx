import { cn } from '@/lib/utils';

type Props = React.ComponentProps<'div'>;

export default function Container({ children, className, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn(
        'mx-auto flex max-w-4xl gap-2 px-5 lg:max-w-5xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
