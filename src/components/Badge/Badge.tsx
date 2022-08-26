import React from 'react';
import classNames from 'classnames';
import { BadgeVariants } from '../../primitives/BadgeTypes';
import './Badge.module.scss';

type BadgeProps = {
  variant: BadgeVariants;
  label?: string;
  icon?: string;
  isRectangle?: boolean;
};

export const Badge = ({
  variant = BadgeVariants.Success,
  label,
  icon,
  isRectangle = false,
}: BadgeProps) => (
  <div
    className={classNames('badge', variant, {
      'rounded': !isRectangle,
    })}
  >
    {icon && <div>{icon}</div>}
    {icon && label && <div className="margin" />}
    {label && <div>{label}</div>}
  </div>
);
