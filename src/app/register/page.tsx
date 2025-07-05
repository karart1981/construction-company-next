import RegisterForm from '@/components/profile/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--dark-blue)] px-4 select-none">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Register</h2>
        <RegisterForm />
      </div>
    </div>
  );
}


