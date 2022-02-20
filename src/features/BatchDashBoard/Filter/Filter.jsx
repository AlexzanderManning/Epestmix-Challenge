/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import {
  FilterIcon
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

import {useDispatch} from 'react-redux';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



export default function Filter({filterFunction, filterFields}) {
  const dispatch = useDispatch();
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="my-5 flex lg:mt-0 lg:ml-auto">
        {/* Dropdown */}
        <Menu as="span" className="relative ml-auto mr-4 lg:mr-0">
          <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <FilterIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            Filter By
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg pt-1 pb-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <Menu.Item>
                {({ active }) => (
                  <span
                    className={classNames(active ? "bg-gray-100" : "", "")}
                    onClick={() => dispatch(filterFunction())}
                  ></span>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <span
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                    onClick={() => dispatch(filterFunction())}
                  >
                    Default
                  </span>
                )}
              </Menu.Item>

              {filterFields.map((field, idx) => (
                <Menu.Item key={`filter-by-${idx}`}>
                  {({ active }) => (
                    <span
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 my-1 text-sm text-gray-700"
                      )}
                      onClick={() => dispatch(filterFunction(field))}
                    >
                      {field}
                    </span>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
