import { Avatar, AvatarGroup } from "@heroui/avatar";

const Avatars = (
  {max, total, size}:{max?: number, total?:number, size?: any}) => 
    {
    return (
      <AvatarGroup isBordered max={ max || 5} total={total || 1} size={size || "md"}>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      </AvatarGroup>
    );
};

export default Avatars;
