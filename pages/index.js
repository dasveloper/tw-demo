import tw from 'twin.macro';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <Disclosure as="div" tw="mt-4">
      {({ open }) => (
        <>
          <Disclosure.Button tw="flex bg-gray-200 items-center">
            Button here
            <ChevronRightIcon
              css={[tw`h-4 w-4`, open && tw`transform rotate-90`]}
            />
          </Disclosure.Button>

          <Disclosure.Panel>Content here</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
