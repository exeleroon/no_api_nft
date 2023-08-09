/** @format */

import Link from 'next/link'
import { DropdownMenuItem, DropdownMenuWrapper, ItemIconWrapper, ItemTextWrapper } from './styled'

const DropdownMenuContainer = ({ menuItems }) => {
    return (
        <DropdownMenuWrapper>
            {menuItems?.map((item, id) => (
                <>
                    {item.onClick ? (
                        <DropdownMenuItem onClick={item?.onClick} key={id}>
                            {item.icon ? <ItemIconWrapper>{item.icon}</ItemIconWrapper> : ''}
                            {item.text ? <ItemTextWrapper>{item.text}</ItemTextWrapper> : ''}
                        </DropdownMenuItem>
                    ) : (
                        <Link href={item.link ? item.link : '#'} onClick={item?.onClick} key={id} passHref>
                            <DropdownMenuItem rel={item.noFollow ? 'nofollow' : ''} target={item.blank ? "_blank" : ""} >
                                {item.icon ? <ItemIconWrapper>{item.icon}</ItemIconWrapper> : ''}
                                {item.text ? <ItemTextWrapper>{item.text}</ItemTextWrapper> : ''}
                            </DropdownMenuItem>
                        </Link>
                    )}
                </>
            ))}
        </DropdownMenuWrapper>
    )
}

export default DropdownMenuContainer
