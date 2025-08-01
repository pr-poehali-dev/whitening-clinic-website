import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className={`w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'scale-90' : 'scale-100'
              } group-hover:scale-110 group-hover:rotate-12`}>
                <Icon name="Smile" size={24} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
            </div>
            <div className="transition-all duration-300">
              <h1 className={`font-bold text-gray-900 transition-all duration-300 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Белоснежка
                </span>
              </h1>
              <p className={`text-gray-500 transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Стоматологическая клиника
              </p>
            </div>
          </div>

          {/* Desktop phone button */}
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hidden sm:flex group shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:animate-pulse">
                <Icon name="Phone" size={14} className="text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-white/80 leading-none">Звоните</span>
                <span className="text-sm font-semibold text-white leading-none">+7 (495) 123-45-67</span>
              </div>
            </div>
          </Button>

          {/* Mobile phone button */}
          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 sm:hidden group shadow-lg hover:shadow-xl transition-all duration-300">
            <Icon name="Phone" size={18} className="text-white group-hover:animate-pulse" />
          </Button>

          {/* Emergency contact indicator */}
          <div className="absolute top-2 right-2 hidden sm:block">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300" 
           style={{
             transform: `scaleX(${isScrolled ? Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1) : 0})`
           }}>
      </div>
    </header>
  );
};

export default Header;