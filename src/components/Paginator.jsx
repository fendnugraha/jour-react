import Link from "next/link";
export default function Paginator({ links }) {
  console.log(links.next_page_url);
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href={links.prev_page_url}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href={links.next_page_url}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 p-1 dark:text-white">
            Showing
            <span className="font-medium mx-1">{links.from}</span>
            to
            <span className="font-medium mx-1">{links.to}</span>
            of
            <span className="font-medium mx-1">{links.total}</span>
            results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {links.links && links.links.length > 1
              ? links.links.map((link) => (
                  <a
                    key={link.label}
                    href={link?.url}
                    className={
                      link.active
                        ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    }
                  >
                    {link.label}
                  </a>
                ))
              : null}
          </nav>
        </div>
      </div>
    </div>
  );
}
