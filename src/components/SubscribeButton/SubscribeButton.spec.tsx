import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router';
import { SubscribeButton } from '.';

jest.mock("next-auth/client");
jest.mock("next/router")

describe('SubscribeButton component', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);
    it('renders correctly', () => {

        render(<SubscribeButton />);

        expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
    })

    it('redirects user to sign in when not authenticated', () => {
        const useSessionMocked = mocked(useSession);
        useSessionMocked.mockReturnValueOnce([null, false]);

        const signInMocked = mocked(signIn);

        render(<SubscribeButton />);

        const subscribeButton = screen.getByText('Subscribe Now');
        fireEvent.click(subscribeButton);

        expect(signInMocked).toHaveBeenCalled();
    })

    it('redirects to posts when user already has a subscription', () => {
        const useRouterMocked = mocked(useRouter);
        const useSessionMocked = mocked(useSession);

        const pushMock = jest.fn()

        useRouterMocked.mockReturnValueOnce({
            push: pushMock
        } as any)

        useSessionMocked.mockReturnValueOnce([
            {
                user: {
                    name: 'John Doe',
                    email: 'johndoe@email.com'
                },
                expires: 'fake-expires',
                activeSubscription: 'fake-subscription'
            },
            false
        ]);

        render(<SubscribeButton />);

        const subscribeButton = screen.getByText('Subscribe Now');
        fireEvent.click(subscribeButton);

        expect(pushMock).toHaveBeenCalledWith('/posts');

    })
})