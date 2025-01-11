interface AvatarType {
    label: string;
}

export function Avatar({ label }: AvatarType) {
    return <div className="avatar placeholder cursor-pointer">
        <div className="bg-neutral text-neutral-content w-10 rounded-full">
            <span className="text-xs font-semibold">{label}</span>
        </div>
    </div>
}