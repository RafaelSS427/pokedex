
import { FC } from 'react'
import { Checkbox, CheckboxProps } from '@nextui-org/react'
import { FaCircle } from 'react-icons/fa'

interface Props extends CheckboxProps {
    label: string;
}

export const CustomCheckbox: FC<Props> = ({ label, ...rest }) => {
    return (
        <Checkbox
            color="secondary"
            radius="full"
            classNames={{
                label: 'text-[#1D1D1D] text-xs sm:text-sm',
                icon: 'fill-primary p-[1px]',
                wrapper: "before:border-primary",
            }}
            icon={<FaCircle className="h-4 w-4" />}
            {...rest}
        >
            { label }
        </Checkbox>
    )
}
