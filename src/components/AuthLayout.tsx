import { useEffect, useState, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/store/store'; // adjust the path according to your store file
import { Loader2 } from 'lucide-react';

interface ProtectedProps {
  children: ReactNode;
  authentication?: boolean;
}

export default function Protected({ children, authentication = true }: ProtectedProps) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const authStatus = useSelector((state: RootState) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/jobs");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <div className='flex justify-center items-center'> <Loader2 className='animate-spin'/> </div> : <>{children}</>;
}
