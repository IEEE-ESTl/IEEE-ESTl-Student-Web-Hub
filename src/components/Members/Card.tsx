
import { Card, CardHeader, CardBody, CardFooter, Image, Tooltip } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import { useState } from "react";

interface Badge {
    name: string;
    description: string;
    icon: string;
    color: string;
    iconColor: string;
}

interface Member {
    name: string;
    date: string;
    image: string;
    badges: Badge[];
}

interface BadgeProps {
    icon: string;
    color: string;
    iconColor: string;
}

const Badge = ({ icon, color, iconColor }: BadgeProps) => {
    return (
        <div className={`rounded-md ${color} text-white p-2`}>
            <Icon icon={icon} className={`${iconColor} text-3xl`} />
        </div>

    )
};

const MemberCard = ({ member }: { member: Member }) => {

    const [badges, setBadges] = useState<Badge[]>(member.badges);

    return (

        <>
            <Card isFooterBlurred className="w-[300px] h-[420px] col-span-12 sm:col-span-7">
                <div>
                    <Image
                        isZoomed
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-72 h-full object-cover"
                        src={member.image}
                    />

                </div>
                <CardFooter className="w-72 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-col gap-2 p-4 w-full">
                        <div className="flex flex-grow gap-2 items-center">
                            <div className="flex flex-col">
                                <h3 className="text-lg text-white">{member.name}</h3>
                                <p className="text-tiny text-white/60">Miembro desde {member.date}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-center">

                            {badges && badges.map((badge, index) => (
                                <Tooltip
                                    delay={2}
                                    closeDelay={2}
                                    content={
                                        <div className="p-4 bg-zinc-900 text-white rounded-md">
                                            <div className="text-small font-bold">{badge.name}</div>
                                            <div className="text-tiny">{badge.description}</div>
                                        </div>
                                    }
                                    placement="bottom">
                                    <div>
                                        <Badge icon={badge.icon} color={badge.color} iconColor={badge.iconColor}></Badge>
                                    </div>
                                </Tooltip>

                            ))}
                        </div>
                    </div>
                </CardFooter>
            </Card>

        </>
    );
}


export default MemberCard;