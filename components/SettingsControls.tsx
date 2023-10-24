import { Cog8ToothIcon } from '@heroicons/react/24/outline';

import { useSettings } from '@/lib/redux';

export const SettingsControls = (): JSX.Element => {
  const { openSettingsModal } = useSettings();

  return (
    <section className="mt-1">
      <Cog8ToothIcon className="h-6 w-6" onClick={openSettingsModal} />
    </section>
  );
};
