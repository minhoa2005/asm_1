import React, { useContext, useState } from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import { colors, useTheme } from '../themeContext'
import * as yup from 'yup';
import { Formik } from 'formik';
import { useUser } from '../userContext';
export default function EditProfileScreen({ navigation }) {
    const { theme } = useTheme();
    const { user, setUser } = useUser();
    const schema = yup.object().shape({
        username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters').max(10, 'Username must be at most 10 characters'),
        bio: yup.string().max(150, 'Bio must be at most 150 characters'),
    })
    return (
        <View style={[styles.container(theme), { flex: 1 }]}>
            <Formik
                initialValues={{ username: user?.username || '', bio: user?.bio || '' }}
                validationSchema={schema}
                onSubmit={(values) => {
                    setUser({ ...user, username: values.username, bio: values.bio });
                    navigation.goBack();
                }}
            >
                {({ handleChange, handleBlur, values, errors, touched, handleSubmit }) => (
                    <View>
                        <View>
                            <Text style={styles.text(theme)}>Username</Text>
                            <TextInput
                                style={styles.textInput(theme)}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                autoCapitalize='none'
                            />
                            {errors.username && touched.username && (
                                <Text style={{ color: 'red', fontSize: 12 }}>
                                    {errors.username}
                                </Text>
                            )}
                        </View>
                        <View>
                            <Text style={styles.text(theme)}>Bio</Text>
                            <TextInput
                                style={[styles.textInput(theme)]}
                                onChangeText={handleChange('bio')}
                                onBlur={handleBlur('bio')}
                                value={values.bio}
                                autoCapitalize='none'
                            />
                            {errors.bio && touched.bio && (
                                <Text style={{ color: 'red', fontSize: 12 }}>
                                    {errors.bio}
                                </Text>
                            )}
                        </View>
                        <Button title="Save Changes" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </View >
    )
}

const styles = {
    container: (theme) => ({
        backgroundColor: colors[theme].background,
        color: colors[theme].text,
    }),
    text: (theme) => ({
        color: colors[theme].text,
    }),
    textInput: (theme) => ({
        backgroundColor: colors[theme].background,
        color: colors[theme].text,
        borderWidth: 1,
        borderColor: colors[theme].text,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    })
}
