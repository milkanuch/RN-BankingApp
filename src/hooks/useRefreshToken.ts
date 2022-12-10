import { useCallback, useEffect, useState } from 'react';

import { getItem } from 'store/bankStore/store';

const useRefreshToken = () => {
  const [refreshToken, setRefreshToken] = useState('');

  const fetchPinCode = useCallback(async () => {
    const tempToken = await getItem('RefreshToken');

    if (tempToken) {
      setRefreshToken(tempToken);
    }
  }, []);

  useEffect(() => {
    fetchPinCode();
  }, [fetchPinCode]);

  return { refreshToken };
};

export default useRefreshToken;
