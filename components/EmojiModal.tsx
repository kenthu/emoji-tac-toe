import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { EMOJI_DEFAULTS } from '@/lib/constants';
import { useSettings } from '@/lib/redux';
import { Player } from '@/lib/types';

// Adapted from https://tailwindui.com/components/application-ui/overlays/modals

const handleEmojiUpdate = () => {
  console.log('Emoji updated!');
};

export const EmojiModal = (): JSX.Element => {
  const { isEmojiModalOpen, emojiModalPlayer, closeEmojiModal } = useSettings();

  // We know we won't use this unless the modal is open
  const player = emojiModalPlayer as Player;

  return (
    <Transition.Root show={isEmojiModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeEmojiModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                      Select an emoji to use instead of {EMOJI_DEFAULTS[player]}
                    </Dialog.Title>
                    <div
                      className="my-3 flex h-28 w-28 items-center justify-center rounded-2xl bg-neutral-200 text-8xl"
                      onClick={handleEmojiUpdate}
                    >
                      🐱
                    </div>
                    <div className="text-lg">Recently used</div>
                    <div className="my-2 flex justify-start gap-3">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="flex h-12 w-12 items-center justify-center rounded bg-neutral-200 text-4xl"
                        >
                          🐱
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 sm:ml-3 sm:w-auto"
                    onClick={closeEmojiModal}
                  >
                    Done
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
