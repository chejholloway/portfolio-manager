import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownUser = () => {

  return (
    <li className="relative">
      <Link
        className="flex items-center gap-4"
        href="#"
        prefetch={false}
      >
        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/images/task/user-05.png"}
            alt="User"
            priority
          />
        </span>
        <span className="hidden text-left lg:block">
          <span className="block text-sm font-medium text-black dark:text-primary">
            Che&apos; J. Holloway
          </span>
          <span className="block text-xs">Sr. Frontend Engineer</span>
        </span>

      </Link>
    </li>
  );
};

export default DropdownUser;
