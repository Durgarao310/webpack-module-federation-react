import React, { useState, useRef, useEffect } from 'react';
import { MultiSelectProps } from './types';
import {
  MultiSelectContainer,
  SelectButton,
  BadgeContainer,
  Badge,
  PopoverContent,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CheckboxIndicator,
} from './style';
import { XCircle, ChevronDown, XIcon, CheckIcon } from 'lucide-react';

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onValueChange,
  defaultValue = [],
  placeholder = 'Select options',
  maxCount = 3,
  className,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValue);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleTogglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleOption = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };

  const handleClear = () => {
    setSelectedValues([]);
    onValueChange([]);
  };

  const clearExtraOptions = () => {
    const newSelectedValues = selectedValues.slice(0, maxCount);
    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };

  const toggleAll = () => {
    if (selectedValues.length === options.length) {
      handleClear();
    } else {
      const allValues = options.map((option) => option.value);
      setSelectedValues(allValues);
      onValueChange(allValues);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MultiSelectContainer ref={popoverRef} className={className}>
      <SelectButton onClick={handleTogglePopover}>
        {selectedValues.length > 0 ? (
          <BadgeContainer>
            {selectedValues.slice(0, maxCount).map((value) => {
              const option = options.find((o) => o.value === value);
              return (
                <Badge key={value}>
                  {option?.label}
                  <XCircle
                    className="ml-2 h-4 w-4 cursor-pointer"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleOption(value);
                    }}
                  />
                </Badge>
              );
            })}
            {selectedValues.length > maxCount && (
              <Badge>
                {`+ ${selectedValues.length - maxCount} more`}
                <XCircle
                  className="ml-2 h-4 w-4 cursor-pointer"
                  onClick={(event) => {
                    event.stopPropagation();
                    clearExtraOptions();
                  }}
                />
              </Badge>
            )}
          </BadgeContainer>
        ) : (
          <span>{placeholder}</span>
        )}
        <ChevronDown className="h-4 w-4" />
      </SelectButton>
      {isPopoverOpen && (
        <PopoverContent>
          <Command>
            <CommandInput
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CommandList>
              {filteredOptions.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
              ) : (
                <CommandGroup>
                  <CommandItem onClick={toggleAll}>
                    <CheckboxIndicator isSelected={selectedValues.length === options.length}>
                      <CheckIcon />
                    </CheckboxIndicator>
                    (Select All)
                  </CommandItem>
                  {filteredOptions.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                      <CommandItem key={option.value} onClick={() => toggleOption(option.value)}>
                        <CheckboxIndicator isSelected={isSelected}>
                          <CheckIcon />
                        </CheckboxIndicator>
                        {option.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              )}
              <CommandSeparator />
              <CommandGroup>
                <CommandItem onClick={handleClear}>Clear</CommandItem>
                <CommandItem onClick={() => setIsPopoverOpen(false)}>Close</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </MultiSelectContainer>
  );
};

export default MultiSelect;
