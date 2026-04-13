import { cn } from "@/lib/utils";

const documents = [
  {
    id: 1,
    name: "Grant Proposal Main_v4",
    type: "PDF",
    size: "12.4 MB",
    icon: "article",
    owner: "A. Richards",
    ownerInitials: "AR",
    ownerColor: "bg-secondary-fixed-dim",
    status: "Verified",
    statusStyle: "bg-tertiary-container text-on-tertiary-container",
    lastEdit: "2h ago",
  },
  {
    id: 2,
    name: "Budget_Allocation_FY24",
    type: "XLSX",
    size: "1.1 MB",
    icon: "table_chart",
    owner: "M. Schmidt",
    ownerInitials: "MS",
    ownerColor: "bg-primary-fixed-dim",
    status: "Reviewing",
    statusStyle: "bg-secondary-fixed text-on-secondary-fixed-variant",
    lastEdit: "5h ago",
  },
  {
    id: 3,
    name: "Legal_Clearance_EMEA",
    type: "DOCX",
    size: "450 KB",
    icon: "gavel",
    iconColor: "text-error",
    owner: "L. Hamilton",
    ownerInitials: "LH",
    ownerColor: "bg-error-container text-on-error-container",
    status: "Missing",
    statusStyle: "bg-error-container text-on-error-container",
    lastEdit: "--",
  },
  {
    id: 4,
    name: "Ethics_Compliance_Stmt",
    type: "PDF",
    size: "2.2 MB",
    icon: "policy",
    owner: "J. Singh",
    ownerInitials: "JS",
    ownerColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    status: "Verified",
    statusStyle: "bg-tertiary-container text-on-tertiary-container",
    lastEdit: "Yesterday",
  },
];

export function DocumentsTable() {
  return (
    <div className="space-y-6 lg:col-span-2">
      <div className="flex items-center justify-between">
        <h3 className="font-headline text-xl font-bold">Critical Documents</h3>
        <div className="flex gap-2">
          <span className="rounded-full bg-surface-container-high px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
            ALL (42)
          </span>
          <span className="cursor-pointer rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-outline hover:bg-surface-container-low">
            PENDING (4)
          </span>
        </div>
      </div>
      <div className="overflow-hidden bg-surface-container-lowest">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-primary-fixed-variant">
                Document Name
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-primary-fixed-variant">
                Owner
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-primary-fixed-variant">
                Status
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-primary-fixed-variant">
                Last Edit
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {documents.map((doc) => (
              <tr
                key={doc.id}
                className="transition-colors hover:bg-surface-container-low"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "material-symbols-outlined",
                        doc.iconColor || "text-outline"
                      )}
                    >
                      {doc.icon}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{doc.name}</p>
                      <p className="text-[10px] font-medium text-outline">
                        {doc.type} &bull; {doc.size}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-bold",
                        doc.ownerColor
                      )}
                    >
                      {doc.ownerInitials}
                    </div>
                    <span className="text-xs font-medium">{doc.owner}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider",
                      doc.statusStyle
                    )}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-xs font-medium text-on-surface-variant">
                  {doc.lastEdit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
