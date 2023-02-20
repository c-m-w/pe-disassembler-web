/* static.ts */

let default_data: Object = {
    "exports": [
        {
            "name": "?add@@YAHHH@Z",
            "rva": 4096
        }
    ],
    "imports": [
        {
            "list": [
                "MessageBoxW"
            ],
            "module": "USER32.dll"
        },
        {
            "list": [
                "memset",
                "_except_handler4_common",
                "__std_type_info_destroy_list"
            ],
            "module": "VCRUNTIME140.dll"
        },
        {
            "list": [
                "_seh_filter_dll",
                "_initterm_e",
                "_initterm",
                "_initialize_narrow_environment",
                "_initialize_onexit_table",
                "_cexit",
                "_configure_narrow_argv",
                "_execute_onexit_table"
            ],
            "module": "api-ms-win-crt-runtime-l1-1-0.dll"
        },
        {
            "list": [
                "GetCurrentProcessId",
                "IsDebuggerPresent",
                "InitializeSListHead",
                "GetSystemTimeAsFileTime",
                "GetCurrentThreadId",
                "UnhandledExceptionFilter",
                "QueryPerformanceCounter",
                "IsProcessorFeaturePresent",
                "TerminateProcess",
                "GetCurrentProcess",
                "SetUnhandledExceptionFilter"
            ],
            "module": "KERNEL32.dll"
        }
    ],
    "nt": {
        "build_time": "Wed Jan  4 13:44:14 2023\n",
        "entry_point": 4996,
        "image_base": 268435456,
        "image_size": 24576
    },
    "relocations": [
        {
            "entries": 138,
            "rva": 4096
        },
        {
            "entries": 16,
            "rva": 8192
        }
    ],
    "sections": [
        {
            "name": ".text",
            "rva": 4096,
            "size": 3584
        },
        {
            "name": ".rdata",
            "rva": 8192,
            "size": 2560
        },
        {
            "name": ".data",
            "rva": 12288,
            "size": 512
        },
        {
            "name": ".rsrc",
            "rva": 16384,
            "size": 512
        },
        {
            "name": ".reloc",
            "rva": 20480,
            "size": 512
        }
    ]
};

let data: Array<any> = [
    {
        id: 1,
        name: "test2.dll",
        size: 10,
        date: "February 12, 2023",
        data: default_data
    },
    {
        id: 2,
        name: "test.dll",
        size: 14,
        date: "February 16, 2023",
        data: default_data
    }
];

export { data };
