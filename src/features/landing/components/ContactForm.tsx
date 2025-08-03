import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Modal, Input, Button } from '@/components/ui';
import { isValidEmail, isValidPhone } from '@/lib/utils';
import { useLanguage } from '@/hooks';
import type { ContactForm as ContactFormData } from '@/types';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  const { t } = useLanguage();

  const centerTypes = [
    t('contactForm.centerTypes.select'),
    t('contactForm.centerTypes.clinic'),
    t('contactForm.centerTypes.hospital'),
    t('contactForm.centerTypes.medicalCenter'),
    t('contactForm.centerTypes.consultingRoom'),
    t('contactForm.centerTypes.other'),
  ];
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    centerType: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contactForm.errors.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.errors.emailRequired');
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t('contactForm.errors.emailInvalid');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('contactForm.errors.phoneRequired');
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = t('contactForm.errors.phoneInvalid');
    }

    if (!formData.centerType || formData.centerType === centerTypes[0]) {
      newErrors.centerType = t('contactForm.errors.centerTypeRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      alert(t('contactForm.successMessage'));
      onClose();
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        centerType: '',
        message: '',
      });
    } catch {
      alert(t('contactForm.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="md" showCloseButton={false}>
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {title || t('contactForm.title')}
          </h3>
          <p className="text-gray-600">
            {description || t('contactForm.description')}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder={t('contactForm.placeholders.name')}
            value={formData.name}
            onChange={handleChange('name')}
            error={errors.name}
          />
          
          <Input
            type="email"
            placeholder={t('contactForm.placeholders.email')}
            value={formData.email}
            onChange={handleChange('email')}
            error={errors.email}
          />
          
          <Input
            type="tel"
            placeholder={t('contactForm.placeholders.phone')}
            value={formData.phone}
            onChange={handleChange('phone')}
            error={errors.phone}
          />
          
          <div>
            <select
              value={formData.centerType}
              onChange={handleChange('centerType')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
            >
              {centerTypes.map((type, index) => (
                <option key={index} value={index === 0 ? '' : type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.centerType && (
              <p className="mt-1 text-sm text-red-600">{errors.centerType}</p>
            )}
          </div>
          
          <Button
            type="submit"
            fullWidth
            size="lg"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {t('contactForm.submitButton')}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          {t('contactForm.guarantees')}
        </p>
      </div>
    </Modal>
  );
};