import React from 'react';
import { useFormik } from 'formik';
import { initialValues, inputs } from './constants';
import InputGroup from '../../components/Input';
import validate from './validation';
import Button from '../../components/Button';
import { setWarn } from '../../store/reducers/warn';
import { useTypedDispatch, useTypedSelector } from '../../store/hooks';
import FetchWrap, { HTTPmethods } from '../../utils/fetchWrap';
import { LoginData, loginSuccess, UserData } from '../../store/reducers/user';
import CustomLink from '../../components/Link';
import { Navigate } from 'react-router-dom';

const Signin = () => {
	const dispatch = useTypedDispatch();
	const { data: user } = useTypedSelector(state => state.user);

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: async (values) => {
			const user = await FetchWrap<LoginData, UserData>(HTTPmethods.POST, '/login', values);
			dispatch(user.success ? loginSuccess(user.data) : setWarn(user.error));
		},
		validateOnChange: false,
		validateOnBlur: true,
		validate,
	});

	return (
		<>
			{user && (
				<Navigate to='/profile' replace />
			)}
			<h2 className='title'>Sign in</h2>

			<form onSubmit={formik.handleSubmit}>
				{inputs.map(({ label, name, type }) => (
					<InputGroup
						key={name}
						label={label}
						name={name}
						type={type}
						value={formik.values[name]}
						touched={formik.touched[name]!}
						error={formik.errors[name]}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				))}
				<Button type='submit' text='Login' disabled={formik.isSubmitting} />
			</form>

			<CustomLink text='Sign up' to={'/registration'} />
		</>
	);
};

Signin.displayName = 'Sign in';

export default Signin;