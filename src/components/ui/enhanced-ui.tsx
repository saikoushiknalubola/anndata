
import React from 'react';
import { cn } from '@/lib/utils';
import { colors, shadows, animations } from '@/styles/theme';

// Enhanced Section with custom background options
export const EnhancedSection = ({
  children,
  className = '',
  variant = 'default',
  withPattern = false,
  withGlow = false,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'earth' | 'glass' | 'gradient';
  withPattern?: boolean;
  withGlow?: boolean;
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-br from-orange-400 to-orange-500 text-white';
      case 'secondary':
        return 'bg-gradient-to-br from-blue-400 to-blue-500 text-white';
      case 'earth':
        return 'bg-gradient-to-br from-amber-700 to-amber-900 text-white';
      case 'glass':
        return 'bg-white/20 backdrop-blur-md border border-white/30 shadow-md';
      case 'gradient':
        return 'bg-gradient-to-br from-orange-400 via-amber-300 to-yellow-400 text-soil';
      default:
        return 'bg-white shadow-sm';
    }
  };

  return (
    <section 
      className={cn(
        'rounded-xl p-5 relative overflow-hidden',
        getVariantClasses(),
        withGlow && 'glow-effect',
        withPattern && 'pattern-background',
        className
      )}
    >
      {children}
    </section>
  );
};

// Glass Card with customizations
export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'rgba(255, 87, 34, 0.4)',
}: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
}) => {
  return (
    <div
      className={cn(
        'bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg p-5 overflow-hidden relative',
        hoverEffect && 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300',
        className
      )}
      style={{ '--glow-color': glowColor } as React.CSSProperties}
    >
      <div className="relative z-10">{children}</div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-xl"></div>
      <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-xl"></div>
    </div>
  );
};

// Gradient Text for headings
export const GradientText = ({
  children,
  className = '',
  variant = 'primary',
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'earth' | 'vibrant' | 'sunset' | 'ocean';
}) => {
  const getGradientColors = () => {
    switch (variant) {
      case 'secondary':
        return 'from-blue-500 to-cyan-400';
      case 'earth':
        return 'from-amber-700 to-yellow-600';
      case 'vibrant':
        return 'from-purple-600 to-pink-600';
      case 'sunset':
        return 'from-orange-500 to-red-500';
      case 'ocean':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-orange-500 to-amber-600';
    }
  };

  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent font-bold',
        getGradientColors(),
        className
      )}
    >
      {children}
    </span>
  );
};

// Icon Badge for decorative icons with background
export const IconBadge = ({
  icon: Icon,
  className = '',
  variant = 'primary',
  size = 'md',
  withGlow = false,
}: {
  icon: React.ElementType;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'earth' | 'soil' | 'leaf' | 'saffron' | 'sky' | 'harvest';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  withGlow?: boolean;
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-blue-100 text-blue-600';
      case 'success':
        return 'bg-green-100 text-green-600';
      case 'warning':
        return 'bg-amber-100 text-amber-600';
      case 'error':
        return 'bg-red-100 text-red-600';
      case 'earth':
        return 'bg-amber-100 text-amber-800';
      case 'soil':
        return 'bg-amber-900/20 text-amber-800';
      case 'leaf':
        return 'bg-green-100 text-green-700';
      case 'saffron':
        return 'bg-orange-100 text-orange-600';  
      case 'sky':
        return 'bg-blue-100 text-blue-600';
      case 'harvest':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-orange-100 text-orange-600';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'p-1 rounded-md';
      case 'sm':
        return 'p-1.5 rounded-md';
      case 'lg':
        return 'p-3 rounded-xl';
      default:
        return 'p-2 rounded-lg';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'xs':
        return 14;
      case 'sm':
        return 16;
      case 'lg':
        return 24;
      default:
        return 20;
    }
  };

  return (
    <div
      className={cn(
        getVariantClasses(),
        getSizeClasses(),
        withGlow && 'shadow-lg',
        'flex items-center justify-center',
        className
      )}
    >
      <Icon size={getIconSize()} />
    </div>
  );
};

// Featured Card with image
export const FeaturedCard = ({
  children,
  imageUrl,
  imageAlt = 'Featured image',
  className = '',
  imageOverlay = true,
  aspectRatio = '16/9',
}: {
  children: React.ReactNode;
  imageUrl: string;
  imageAlt?: string;
  className?: string;
  imageOverlay?: boolean;
  aspectRatio?: string;
}) => {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300',
        className
      )}
    >
      <div className="relative" style={{ aspectRatio }}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {imageOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

// Animated Badge
export const AnimatedBadge = ({
  children,
  className = '',
  variant = 'primary',
  animation = 'pulse',
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  animation?: 'pulse' | 'bounce' | 'fade';
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-blue-500 text-white';
      case 'success':
        return 'bg-green-500 text-white';
      case 'warning':
        return 'bg-amber-500 text-white';
      case 'info':
        return 'bg-cyan-500 text-white';
      default:
        return 'bg-orange-500 text-white';
    }
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case 'bounce':
        return 'animate-bounce';
      case 'fade':
        return 'animate-pulse';
      default:
        return 'animate-pulse';
    }
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        getVariantClasses(),
        getAnimationClasses(),
        className
      )}
    >
      {children}
    </span>
  );
};

// Glassmorphism container
export const GlassContainer = ({
  children,
  className = '',
  intensity = 'medium',
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}) => {
  const getIntensityClasses = () => {
    switch (intensity) {
      case 'light':
        return 'bg-white/10 backdrop-blur-sm border border-white/20';
      case 'heavy':
        return 'bg-white/30 backdrop-blur-xl border border-white/40';
      default:
        return 'bg-white/20 backdrop-blur-md border border-white/30';
    }
  };

  return (
    <div
      className={cn(
        'rounded-xl shadow-lg',
        getIntensityClasses(),
        className
      )}
    >
      {children}
    </div>
  );
};

// Decorative Divider
export const DecorativeDivider = ({
  className = '',
  variant = 'gradient',
}: {
  className?: string;
  variant?: 'gradient' | 'dots' | 'dashed' | 'wavy';
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'dots':
        return 'border-dotted border-t-4 border-orange-300/50';
      case 'dashed':
        return 'border-dashed border-t-2 border-orange-400/60';
      case 'wavy':
        return 'wavy-divider';
      default:
        return 'bg-gradient-to-r from-transparent via-orange-400 to-transparent h-px';
    }
  };

  return (
    <div
      className={cn(
        'w-full my-4',
        getVariantClasses(),
        className
      )}
    ></div>
  );
};

// Enhanced Page Title
export const EnhancedPageTitle = ({
  children,
  className = '',
  withDecoration = true,
  withGlow = false,
}) => {
  return (
    <div className={cn('relative py-2', className)}>
      {withDecoration && (
        <span className="absolute left-0 top-0 w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
      )}
      <h1 className={cn('font-decorative text-2xl sm:text-3xl text-soil', withGlow && 'text-glow')}>
        {children}
      </h1>
      {withDecoration && (
        <span className="absolute right-0 bottom-0 w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></span>
      )}
    </div>
  );
};
