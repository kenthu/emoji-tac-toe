import { Dialog, Transition } from '@headlessui/react';
import EmojiPicker, { EmojiClickData, EmojiStyle } from 'emoji-picker-react';
import React from 'react';

import { useSettings } from '@/lib/redux';
import { Player } from '@/lib/types';

// Adapted from https://tailwindui.com/components/application-ui/overlays/modals

export const EmojiModal = (): JSX.Element => {
  const {
    closeEmojiModal,
    emojiModalPlayer,
    getPlayerEmoji,
    isEmojiModalOpen,
    recentEmojiList,
    setPlayerEmoji,
  } = useSettings();

  // We know we won't use this unless the modal is open
  const player = emojiModalPlayer as Player;

  const setEmojiAndClose = React.useCallback(
    (emoji: string) => {
      if (!emoji) {
        return;
      }
      setPlayerEmoji(player, emoji);
      closeEmojiModal();
    },
    [closeEmojiModal, player, setPlayerEmoji],
  );

  const handlePickerClick = React.useCallback(
    (emojiData: EmojiClickData) => {
      setEmojiAndClose(emojiData.emoji);
    },
    [setEmojiAndClose],
  );

  return (
    <Transition.Root show={isEmojiModalOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeEmojiModal}>
        <Transition.Child
          as={React.Fragment}
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
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="mt-3 flex flex-col gap-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                      Select an emoji to use on the grid
                    </Dialog.Title>
                    <div className="grid grid-cols-[6rem_auto] text-2xl">
                      <div className="text-lg">Current</div>
                      <div className="text-lg">Recently used</div>
                      <div className="my-2 flex justify-start gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded bg-neutral-200 text-4xl">
                          {getPlayerEmoji(player)}
                        </div>
                      </div>
                      <div className="my-2 flex justify-start gap-3">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="flex h-12 w-12 items-center justify-center rounded bg-neutral-200 text-4xl"
                            onClick={() => setEmojiAndClose(recentEmojiList[i])}
                          >
                            {recentEmojiList[i]}
                          </div>
                        ))}
                      </div>
                    </div>
                    <EmojiPicker
                      onEmojiClick={handlePickerClick}
                      emojiStyle={EmojiStyle.NATIVE}
                      lazyLoadEmojis={true}
                      previewConfig={{
                        showPreview: false,
                      }}
                    />
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
