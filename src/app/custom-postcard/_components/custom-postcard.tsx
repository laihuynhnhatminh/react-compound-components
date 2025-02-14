'use client';

import type { ComponentProps, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type CustomPostCardProps = PropsWithChildren;
type CustomPostCardTitleProps = PropsWithChildren & ComponentProps<'h2'>;
type CustomPostCardContentProps = PropsWithChildren & ComponentProps<'p'>;
type CustomPostCardUserProps = PropsWithChildren & ComponentProps<'p'>;
type CustomPostCardActionsProps = PropsWithChildren & ComponentProps<'div'>;

/**
 * Not Compound Components
 * - Just simple container components that are pre-styled with some default styles
 * - These components are not compound components because they don't have any shared state or logic
 * - They are just simple components that are styled in a certain way
 * - These components can be used in any part of the app
 */
function CustomPostCard({ children }: CustomPostCardProps) {
  return (
    <div className="flex w-[300px] flex-col gap-2 rounded-md bg-neutral-800 p-2 text-white">
      {children}
    </div>
  );
}

function CustomPostCardTitle({
  children,
  className,
  ...props
}: CustomPostCardTitleProps) {
  return (
    <h2 {...props} className={cn('text-lg font-semibold', className)}>
      {children}
    </h2>
  );
}

function CustomPostCardContent({
  children,
  className,
  ...props
}: CustomPostCardContentProps) {
  return (
    <p {...props} className={cn(className)}>
      {children}
    </p>
  );
}

function CustomPostCardUser({
  children,
  className,
  ...props
}: CustomPostCardUserProps) {
  return (
    <p {...props} className={cn('text-sm text-neutral-400', className)}>
      {children}
    </p>
  );
}

function CustomPostCardActions({
  children,
  className,
  ...props
}: CustomPostCardActionsProps) {
  return (
    <div {...props} className={cn('flex flex-row gap-2', className)}>
      {children}
    </div>
  );
}

export {
  CustomPostCard,
  CustomPostCardActions,
  CustomPostCardContent,
  CustomPostCardTitle,
  CustomPostCardUser,
};
