import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import { Calendar, Video, MapPin, Check } from 'lucide-react';

type BookingStep = 'type' | 'datetime' | 'details' | 'confirm';

const Booking: React.FC = () => {
  const [step, setStep] = useState<BookingStep>('type');
  const [consultType, setConsultType] = useState<'online' | 'clinic' | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleTypeSelect = (type: 'online' | 'clinic') => {
    setConsultType(type);
    setStep('datetime');
  };

  const onSubmit = (data: any) => {
    console.log(data);
    setStep('confirm');
  };

  return (
    <>
      <title>Book Consultation | Dr. Rimjhim Goswami</title>
      <meta name="description" content="Schedule your consultation for infertility or chronic condition treatment. Online video calls or in-clinic visits in Chhatarpur, Delhi available." />
      
      <Layout>
        <div className="min-h-[80vh] bg-oatmeal py-12 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="flex justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
              {['Service', 'Time', 'Details'].map((label, idx) => {
                const active = (step === 'type' && idx === 0) || (step === 'datetime' && idx === 1) || (step === 'details' && idx === 2) || step === 'confirm';
                return (
                  <div key={label} className="flex flex-col items-center bg-oatmeal px-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${active ? 'bg-sage text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {idx + 1}
                    </div>
                    <span className="text-xs mt-1 text-charcoal/60 font-medium">{label}</span>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100">
              {step === 'type' && (
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl text-sage text-center mb-2">How would you like to consult?</h2>
                  <p className="text-center text-charcoal/60 mb-8">Choose the option that suits you best.</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <button 
                      onClick={() => handleTypeSelect('clinic')}
                      className="p-6 border-2 border-gray-100 rounded-2xl hover:border-sage hover:bg-sage/5 transition-all text-left group"
                    >
                      <div className="bg-sage/10 w-12 h-12 rounded-full flex items-center justify-center text-sage mb-4 group-hover:bg-sage group-hover:text-white transition-colors">
                        <MapPin size={24} />
                      </div>
                      <h3 className="font-bold text-lg text-charcoal mb-2">In-Clinic Visit</h3>
                      <p className="text-sm text-charcoal/60">Visit us at Chhatarpur, New Delhi. Ideal for physical examination.</p>
                    </button>

                    <button 
                       onClick={() => handleTypeSelect('online')}
                       className="p-6 border-2 border-gray-100 rounded-2xl hover:border-sage hover:bg-sage/5 transition-all text-left group"
                    >
                      <div className="bg-clay/10 w-12 h-12 rounded-full flex items-center justify-center text-clay mb-4 group-hover:bg-clay group-hover:text-white transition-colors">
                        <Video size={24} />
                      </div>
                      <h3 className="font-bold text-lg text-charcoal mb-2">Video Consultation</h3>
                      <p className="text-sm text-charcoal/60">Secure video call from the comfort of your home. Pan-India & Global.</p>
                    </button>
                  </div>
                </div>
              )}

              {step === 'datetime' && (
                <div>
                  <button onClick={() => setStep('type')} className="text-sm text-gray-400 hover:text-charcoal mb-4">&larr; Back</button>
                  <h2 className="font-serif text-2xl text-sage mb-6">Select a Time</h2>
                  {/* Mock Calendar Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                     {['10:00 AM', '11:30 AM', '01:00 PM', '04:00 PM', '05:30 PM', '06:45 PM'].map(time => (
                       <button 
                          key={time}
                          onClick={() => setStep('details')}
                          className="py-3 px-2 rounded-lg border border-gray-200 text-sm hover:bg-sage hover:text-white hover:border-sage transition-colors"
                       >
                         {time}
                       </button>
                     ))}
                  </div>
                  <p className="text-xs text-center text-gray-400">Timezone: India Standard Time (IST)</p>
                </div>
              )}

              {step === 'details' && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                   <button type="button" onClick={() => setStep('datetime')} className="text-sm text-gray-400 hover:text-charcoal mb-4">&larr; Back</button>
                   <h2 className="font-serif text-2xl text-sage mb-4">Your Details</h2>
                   
                   <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1">Full Name</label>
                        <input 
                          {...register('name', { required: true })}
                          className="w-full p-3 bg-oatmeal rounded-lg border-none focus:ring-2 focus:ring-sage" 
                          placeholder="John Doe"
                        />
                        {errors.name && <span className="text-xs text-red-500">Required</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1">Phone Number (WhatsApp)</label>
                        <input 
                          {...register('phone', { required: true })}
                          className="w-full p-3 bg-oatmeal rounded-lg border-none focus:ring-2 focus:ring-sage" 
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1">Primary Concern</label>
                        <textarea 
                          {...register('concern')}
                          className="w-full p-3 bg-oatmeal rounded-lg border-none focus:ring-2 focus:ring-sage h-24" 
                          placeholder="Briefly describe your condition..."
                        />
                      </div>
                   </div>

                   <div className="bg-sage/5 p-4 rounded-xl mt-6">
                     <div className="flex justify-between items-center mb-2">
                       <span className="font-medium text-sage">Consultation Fee</span>
                       <span className="font-bold text-sage text-lg">₹499</span>
                     </div>
                     <p className="text-xs text-charcoal/60">
                       By booking, you support our mission to make holistic healthcare accessible.
                     </p>
                   </div>

                   <button type="submit" className="w-full bg-rose text-white py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all mt-4">
                     Confirm Appointment
                   </button>
                </form>
              )}

              {step === 'confirm' && (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                    <Check size={40} />
                  </div>
                  <h2 className="font-serif text-3xl text-sage mb-4">Booking Request Sent!</h2>
                  <p className="text-charcoal/70 mb-8 max-w-md mx-auto">
                    Thank you for starting your journey with us. Our team will contact you on WhatsApp shortly to confirm the payment and finalize your slot.
                  </p>
                  <a href="/" className="text-rose font-medium hover:underline">Return to Home</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Booking;