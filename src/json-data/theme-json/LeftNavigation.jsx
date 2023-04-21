import { Test } from "../../component/Test";
import UserRegistration from "../../component/UserRegistration";
import { Role } from "../../component/Role";
import { RoleList } from "../../component/RoleList";
import { UserList } from "../../component/UserList";
import { File } from "../../component/File";
import FileList from "../../component/FileList";
import { UploadPreview } from "../../component/UploadPreview";

const section = [
  {
    title: "YOUR COMPANY",
    option: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-browser-firefox"
            viewBox="0 0 16 16"
          >
            <path d="M13.384 3.408c.535.276 1.22 1.152 1.556 1.963a7.98 7.98 0 0 1 .503 3.897l-.009.077a8.533 8.533 0 0 1-.026.224A7.758 7.758 0 0 1 .006 8.257v-.04c.016-.363.055-.724.114-1.082.01-.074.075-.42.09-.489l.01-.051a6.551 6.551 0 0 1 1.041-2.35c.217-.31.46-.6.725-.87.233-.238.487-.456.758-.65a1.5 1.5 0 0 1 .26-.137c-.018.268-.04 1.553.268 1.943h.003a5.744 5.744 0 0 1 1.868-1.443 3.597 3.597 0 0 0 .021 1.896c.07.047.137.098.2.152.107.09.226.207.454.433l.068.066.009.009a1.933 1.933 0 0 0 .213.18c.383.287.943.563 1.306.741.201.1.342.168.359.193l.004.008c-.012.193-.695.858-.933.858-2.206 0-2.564 1.335-2.564 1.335.087.997.714 1.839 1.517 2.357a3.72 3.72 0 0 0 .439.241c.076.034.152.065.228.094.325.115.665.18 1.01.194 3.043.143 4.155-2.804 3.129-4.745v-.001a3.005 3.005 0 0 0-.731-.9 2.945 2.945 0 0 0-.571-.37l-.003-.002a2.679 2.679 0 0 1 1.87.454 3.915 3.915 0 0 0-3.396-1.983c-.078 0-.153.005-.23.01l-.042.003V4.31h-.002a3.882 3.882 0 0 0-.8.14 6.454 6.454 0 0 0-.333-.314 2.321 2.321 0 0 0-.2-.152 3.594 3.594 0 0 1-.088-.383 4.88 4.88 0 0 1 1.352-.289l.05-.003c.052-.004.125-.01.205-.012C7.996 2.212 8.733.843 10.17.002l-.003.005.003-.001.002-.002h.002l.002-.002a.028.028 0 0 1 .015 0 .02.02 0 0 1 .012.007 2.408 2.408 0 0 0 .206.48c.06.103.122.2.183.297.49.774 1.023 1.379 1.543 1.968.771.874 1.512 1.715 2.036 3.02l-.001-.013a8.06 8.06 0 0 0-.786-2.353Z" />
          </svg>
        ),
        name: "Dashboad",
        path: "/",
        component: File,
        subItem: [],
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list-task"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
            />
            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
            <path
              fill-rule="evenodd"
              d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
            />
          </svg>
        ),
        name: "File",
        path: "",
        component: "",
        subItem: [
          {
            icon: "",
            name: "Create File",
            path: "/file_create",
            subComponent: File,
          },
          {
            icon: "",
            name: "File List",
            path: "/file_list",
            subComponent: FileList
          },
          {
            icon: "",
            name: "Inbox",
            path: "/file_inbox",
            subComponent: UploadPreview
          },
          {
            icon: "",
            name: "Sent List",
            path: "/file_sentlist",
            subComponent: Test
          }
        ],
      },{
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-app-indicator"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          </svg>
        ),
        name: "Receipt",
        path: "",
        component: "",
        subItem: [
          {
            icon: "",
            name: "Create Receipt",
            path: "/receipt_create",
            subComponent: File,
          },
          {
            icon: "",
            name: "Receipt List",
            path: "/receipt_list",
            subComponent: Test
          },
          {
            icon: "",
            name: "Inbox",
            path: "/receipt_inbox",
            subComponent: Test
          },
          {
            icon: "",
            name: "Sent List",
            path: "/rceipt_sentlist",
            subComponent: Test
          }
        ],
      },
    ],
  },
  {
    title: "OUR FEACTURE",
    option: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bar-chart"
            viewBox="0 0 16 16"
          >
            <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
          </svg>
        ),
        name: "Administration",
        path: "",
        component: "",
        subItem: [
          {
            icon: "icon-float",
            name: "user",
            path: "/user",
            subComponent: UserRegistration,
          },
          {
            icon: "icon-morris",
            name: "User list",
            path: "/userList",
            subComponent: UserList,
          },

          {
            icon: "",
            name: "Role",
            path: "/role",
            subComponent: Role,
          },
          {
            icon: "icon",
            name: "Role List",
            path: "/roleList",
            subComponent: RoleList,
          }
        ],
      }

    ],
  },
];

export default section;
