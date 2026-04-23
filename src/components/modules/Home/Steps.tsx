import { Search, ClipboardList, CalendarCheck, ShieldCheck, FileText, Video, CreditCard, HeartPulse } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ColorVariant = 'blue' | 'pink' | 'green' | 'yellow' | 'purple' | 'indigo' | 'orange' | 'red';

const steps: Array<{
  icon: React.ElementType;
  title: string;
  description: string;
  color: ColorVariant;
}> = [
  { 
    icon: Search, 
    title: 'Search Doctor', 
    description: 'Find your doctor easily with a minimum of effort.',
    color: 'blue' as const
  },
  { 
    icon: ClipboardList, 
    title: 'Check Doctor Profile', 
    description: 'Get to know your doctor better.',
    color: 'pink' as const
  },
  { 
    icon: CalendarCheck, 
    title: 'Schedule Appointment', 
    description: 'Choose the time and date that suits you.',
    color: 'green' as const
  },
  { 
    icon: ShieldCheck, 
    title: 'Get Your Solution', 
    description: 'Our doctors are here to help you.',
    color: 'yellow' as const
  },
  { 
    icon: FileText, 
    title: 'Electronic prescription', 
    description: 'Get your prescription instantly.',
    color: 'purple' as const
  },
  { 
    icon: Video, 
    title: 'Instant video consultation', 
    description: 'Consult with your doctor from anywhere.',
    color: 'indigo' as const
  },
  { 
    icon: CreditCard, 
    title: 'Easy payment options', 
    description: 'Pay with ease using various methods.',
    color: 'orange' as const
  },
  { 
    icon: HeartPulse, 
    title: 'Health recovery', 
    description: 'Start your journey to better health.',
    color: 'red' as const
  },
];

const colorVariants = {
  blue: {
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-500',
    iconHover: 'group-hover:bg-blue-600',
    cardHover: 'hover:border-blue-200',
  },
  pink: {
    bg: 'bg-pink-50',
    iconBg: 'bg-pink-500',
    iconHover: 'group-hover:bg-pink-600',
    cardHover: 'hover:border-pink-200',
  },
  green: {
    bg: 'bg-green-50',
    iconBg: 'bg-green-500',
    iconHover: 'group-hover:bg-green-600',
    cardHover: 'hover:border-green-200',
  },
  yellow: {
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-500',
    iconHover: 'group-hover:bg-amber-600',
    cardHover: 'hover:border-amber-200',
  },
  purple: {
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-500',
    iconHover: 'group-hover:bg-purple-600',
    cardHover: 'hover:border-purple-200',
  },
  indigo: {
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-500',
    iconHover: 'group-hover:bg-indigo-600',
    cardHover: 'hover:border-indigo-200',
  },
  orange: {
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-500',
    iconHover: 'group-hover:bg-orange-600',
    cardHover: 'hover:border-orange-200',
  },
  red: {
    bg: 'bg-red-50',
    iconBg: 'bg-red-500',
    iconHover: 'group-hover:bg-red-600',
    cardHover: 'hover:border-red-200',
  },
};

const StepCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index,
  color 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  color: ColorVariant;
}) => {
  const variant = colorVariants[color];
  
  return (
    <Card 
      className={cn(
        'group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        variant.bg,
        variant.cardHover
      )}
    >
      <CardContent className="p-6">
        {/* Step Number */}
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
          <span className="text-sm font-bold text-gray-600">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="flex flex-col space-y-4">
          {/* Icon */}
          <div
            className={cn(
              'inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-lg transition-all duration-300',
              variant.iconBg,
              variant.iconHover,
              'group-hover:scale-110 group-hover:shadow-2xl'
            )}
          >
            <Icon size={28} className="text-white" />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-gray-900">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-gray-700">
              {description}
            </p>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-150" />
      </CardContent>
    </Card>
  );
};

const Steps = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50/50 py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
            <HeartPulse className="h-4 w-4" />
            How It Works
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
            Easy Steps to Get Your Solution
          </h2>
          <p className="text-base text-muted-foreground lg:text-lg">
            We provide advanced technologies and high-quality surgery facilities right here.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Join thousands of satisfied patients who found their perfect healthcare solution
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
