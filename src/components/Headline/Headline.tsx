import * as S from './Headline.styles';
import { TextProps } from './Headline.styles';

export type HeadlineProps = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'span';
    children: React.ReactNode;
    className?: string;
} & TextProps;

const defaultProps: Partial<HeadlineProps> = {
    tag: 'p',
    className: '',
};

export function Headline(props: HeadlineProps): React.ReactElement {
    const { tag, children, color, className } = {
        ...defaultProps,
        ...props,
    };

    return (
        <S.Text as={tag} className={className} color={color}>
            {children}
        </S.Text>
    );
}
