export interface UserWhereInput {
    id?: string | null;

    id_not?: string | null;

    id_in?: string[] | null;

    id_not_in?: string[] | null;

    id_lt?: string | null;

    id_lte?: string | null;

    id_gt?: string | null;

    id_gte?: string | null;

    id_contains?: string | null;

    id_not_contains?: string | null;

    id_starts_with?: string | null;

    id_not_starts_with?: string | null;

    id_ends_with?: string | null;

    id_not_ends_with?: string | null;

    email?: string | null;

    email_not?: string | null;

    email_in?: string[] | null;

    email_not_in?: string[] | null;

    email_lt?: string | null;

    email_lte?: string | null;

    email_gt?: string | null;

    email_gte?: string | null;

    email_contains?: string | null;

    email_not_contains?: string | null;

    email_starts_with?: string | null;

    email_not_starts_with?: string | null;

    email_ends_with?: string | null;

    email_not_ends_with?: string | null;

    API_every?: ApiApplicationWhereInput | null;

    API_some?: ApiApplicationWhereInput | null;

    API_none?: ApiApplicationWhereInput | null;

    notifications_every?: NotificationWhereInput | null;

    notifications_some?: NotificationWhereInput | null;

    notifications_none?: NotificationWhereInput | null;

    set_private?: boolean | null;

    set_private_not?: boolean | null;

    username?: string | null;

    username_not?: string | null;

    username_in?: string[] | null;

    username_not_in?: string[] | null;

    username_lt?: string | null;

    username_lte?: string | null;

    username_gt?: string | null;

    username_gte?: string | null;

    username_contains?: string | null;

    username_not_contains?: string | null;

    username_starts_with?: string | null;

    username_not_starts_with?: string | null;

    username_ends_with?: string | null;

    username_not_ends_with?: string | null;

    password?: string | null;

    password_not?: string | null;

    password_in?: string[] | null;

    password_not_in?: string[] | null;

    password_lt?: string | null;

    password_lte?: string | null;

    password_gt?: string | null;

    password_gte?: string | null;

    password_contains?: string | null;

    password_not_contains?: string | null;

    password_starts_with?: string | null;

    password_not_starts_with?: string | null;

    password_ends_with?: string | null;

    password_not_ends_with?: string | null;

    avatar_url?: FileWhereInput | null;

    confirmed?: boolean | null;

    confirmed_not?: boolean | null;

    online?: boolean | null;

    online_not?: boolean | null;

    friends_every?: UserWhereInput | null;

    friends_some?: UserWhereInput | null;

    friends_none?: UserWhereInput | null;

    friend_requests_every?: UserWhereInput | null;

    friend_requests_some?: UserWhereInput | null;

    friend_requests_none?: UserWhereInput | null;

    createdAt?: DateTime | null;

    createdAt_not?: DateTime | null;

    createdAt_in?: DateTime[] | null;

    createdAt_not_in?: DateTime[] | null;

    createdAt_lt?: DateTime | null;

    createdAt_lte?: DateTime | null;

    createdAt_gt?: DateTime | null;

    createdAt_gte?: DateTime | null;

    updatedAt?: DateTime | null;

    updatedAt_not?: DateTime | null;

    updatedAt_in?: DateTime[] | null;

    updatedAt_not_in?: DateTime[] | null;

    updatedAt_lt?: DateTime | null;

    updatedAt_lte?: DateTime | null;

    updatedAt_gt?: DateTime | null;

    updatedAt_gte?: DateTime | null;

    role?: UserRole | null;

    role_not?: UserRole | null;

    role_in?: UserRole[] | null;

    role_not_in?: UserRole[] | null;

    teams_every?: TeamWhereInput | null;

    teams_some?: TeamWhereInput | null;

    teams_none?: TeamWhereInput | null;

    channels_every?: ChannelWhereInput | null;

    channels_some?: ChannelWhereInput | null;

    channels_none?: ChannelWhereInput | null;

    owned_teams_every?: TeamWhereInput | null;

    owned_teams_some?: TeamWhereInput | null;

    owned_teams_none?: TeamWhereInput | null;

    owned_channels_every?: ChannelWhereInput | null;

    owned_channels_some?: ChannelWhereInput | null;

    owned_channels_none?: ChannelWhereInput | null;

    AND?: UserWhereInput[] | null;

    OR?: UserWhereInput[] | null;

    NOT?: UserWhereInput[] | null;
}

export interface ApiApplicationWhereInput {
    id?: string | null;

    id_not?: string | null;

    id_in?: string[] | null;

    id_not_in?: string[] | null;

    id_lt?: string | null;

    id_lte?: string | null;

    id_gt?: string | null;

    id_gte?: string | null;

    id_contains?: string | null;

    id_not_contains?: string | null;

    id_starts_with?: string | null;

    id_not_starts_with?: string | null;

    id_ends_with?: string | null;

    id_not_ends_with?: string | null;

    admin?: UserWhereInput | null;

    moderators_every?: UserWhereInput | null;

    moderators_some?: UserWhereInput | null;

    moderators_none?: UserWhereInput | null;

    name?: string | null;

    name_not?: string | null;

    name_in?: string[] | null;

    name_not_in?: string[] | null;

    name_lt?: string | null;

    name_lte?: string | null;

    name_gt?: string | null;

    name_gte?: string | null;

    name_contains?: string | null;

    name_not_contains?: string | null;

    name_starts_with?: string | null;

    name_not_starts_with?: string | null;

    name_ends_with?: string | null;

    name_not_ends_with?: string | null;

    token?: string | null;

    token_not?: string | null;

    token_in?: string[] | null;

    token_not_in?: string[] | null;

    token_lt?: string | null;

    token_lte?: string | null;

    token_gt?: string | null;

    token_gte?: string | null;

    token_contains?: string | null;

    token_not_contains?: string | null;

    token_starts_with?: string | null;

    token_not_starts_with?: string | null;

    token_ends_with?: string | null;

    token_not_ends_with?: string | null;

    createdAt?: DateTime | null;

    createdAt_not?: DateTime | null;

    createdAt_in?: DateTime[] | null;

    createdAt_not_in?: DateTime[] | null;

    createdAt_lt?: DateTime | null;

    createdAt_lte?: DateTime | null;

    createdAt_gt?: DateTime | null;

    createdAt_gte?: DateTime | null;

    updatedAt?: DateTime | null;

    updatedAt_not?: DateTime | null;

    updatedAt_in?: DateTime[] | null;

    updatedAt_not_in?: DateTime[] | null;

    updatedAt_lt?: DateTime | null;

    updatedAt_lte?: DateTime | null;

    updatedAt_gt?: DateTime | null;

    updatedAt_gte?: DateTime | null;

    AND?: ApiApplicationWhereInput[] | null;

    OR?: ApiApplicationWhereInput[] | null;

    NOT?: ApiApplicationWhereInput[] | null;
}

export interface NotificationWhereInput {
    id?: string | null;

    id_not?: string | null;

    id_in?: string[] | null;

    id_not_in?: string[] | null;

    id_lt?: string | null;

    id_lte?: string | null;

    id_gt?: string | null;

    id_gte?: string | null;

    id_contains?: string | null;

    id_not_contains?: string | null;

    id_starts_with?: string | null;

    id_not_starts_with?: string | null;

    id_ends_with?: string | null;

    id_not_ends_with?: string | null;

    message?: string | null;

    message_not?: string | null;

    message_in?: string[] | null;

    message_not_in?: string[] | null;

    message_lt?: string | null;

    message_lte?: string | null;

    message_gt?: string | null;

    message_gte?: string | null;

    message_contains?: string | null;

    message_not_contains?: string | null;

    message_starts_with?: string | null;

    message_not_starts_with?: string | null;

    message_ends_with?: string | null;

    message_not_ends_with?: string | null;

    author?: UserWhereInput | null;

    AND?: NotificationWhereInput[] | null;

    OR?: NotificationWhereInput[] | null;

    NOT?: NotificationWhereInput[] | null;
}

export interface FileWhereInput {
    id?: string | null;

    id_not?: string | null;

    id_in?: string[] | null;

    id_not_in?: string[] | null;

    id_lt?: string | null;

    id_lte?: string | null;

    id_gt?: string | null;

    id_gte?: string | null;

    id_contains?: string | null;

    id_not_contains?: string | null;

    id_starts_with?: string | null;

    id_not_starts_with?: string | null;

    id_ends_with?: string | null;

    id_not_ends_with?: string | null;

    createdAt?: DateTime | null;

    createdAt_not?: DateTime | null;

    createdAt_in?: DateTime[] | null;

    createdAt_not_in?: DateTime[] | null;

    createdAt_lt?: DateTime | null;

    createdAt_lte?: DateTime | null;

    createdAt_gt?: DateTime | null;

    createdAt_gte?: DateTime | null;

    updatedAt?: DateTime | null;

    updatedAt_not?: DateTime | null;

    updatedAt_in?: DateTime[] | null;

    updatedAt_not_in?: DateTime[] | null;

    updatedAt_lt?: DateTime | null;

    updatedAt_lte?: DateTime | null;

    updatedAt_gt?: DateTime | null;

    updatedAt_gte?: DateTime | null;

    filename?: string | null;

    filename_not?: string | null;

    filename_in?: string[] | null;

    filename_not_in?: string[] | null;

    filename_lt?: string | null;

    filename_lte?: string | null;

    filename_gt?: string | null;

    filename_gte?: string | null;

    filename_contains?: string | null;

    filename_not_contains?: string | null;

    filename_starts_with?: string | null;

    filename_not_starts_with?: string | null;

    filename_ends_with?: string | null;

    filename_not_ends_with?: string | null;

    mimetype?: string | null;

    mimetype_not?: string | null;

    mimetype_in?: string[] | null;

    mimetype_not_in?: string[] | null;

    mimetype_lt?: string | null;

    mimetype_lte?: string | null;

    mimetype_gt?: string | null;

    mimetype_gte?: string | null;

    mimetype_contains?: string | null;

    mimetype_not_contains?: string | null;

    mimetype_starts_with?: string | null;

    mimetype_not_starts_with?: string | null;

    mimetype_ends_with?: string | null;

    mimetype_not_ends_with?: string | null;

    encoding?: string | null;

    encoding_not?: string | null;

    encoding_in?: string[] | null;

    encoding_not_in?: string[] | null;

    encoding_lt?: string | null;

    encoding_lte?: string | null;

    encoding_gt?: string | null;

    encoding_gte?: string | null;

    encoding_contains?: string | null;

    encoding_not_contains?: string | null;

    encoding_starts_with?: string | null;

    encoding_not_starts_with?: string | null;

    encoding_ends_with?: string | null;

    encoding_not_ends_with?: string | null;

    key?: string | null;

    key_not?: string | null;

    key_in?: string[] | null;

    key_not_in?: string[] | null;

    key_lt?: string | null;

    key_lte?: string | null;

    key_gt?: string | null;

    key_gte?: string | null;

    key_contains?: string | null;

    key_not_contains?: string | null;

    key_starts_with?: string | null;

    key_not_starts_with?: string | null;

    key_ends_with?: string | null;

    key_not_ends_with?: string | null;

    ETag?: string | null;

    ETag_not?: string | null;

    ETag_in?: string[] | null;

    ETag_not_in?: string[] | null;

    ETag_lt?: string | null;

    ETag_lte?: string | null;

    ETag_gt?: string | null;

    ETag_gte?: string | null;

    ETag_contains?: string | null;

    ETag_not_contains?: string | null;

    ETag_starts_with?: string | null;

    ETag_not_starts_with?: string | null;

    ETag_ends_with?: string | null;

    ETag_not_ends_with?: string | null;

    url?: string | null;

    url_not?: string | null;

    url_in?: string[] | null;

    url_not_in?: string[] | null;

    url_lt?: string | null;

    url_lte?: string | null;

    url_gt?: string | null;

    url_gte?: string | null;

    url_contains?: string | null;

    url_not_contains?: string | null;

    url_starts_with?: string | null;

    url_not_starts_with?: string | null;

    url_ends_with?: string | null;

    url_not_ends_with?: string | null;

    AND?: FileWhereInput[] | null;

    OR?: FileWhereInput[] | null;

    NOT?: FileWhereInput[] | null;
}

export interface TeamWhereInput {
    id?: string | null;

    id_not?: string | null;

    id_in?: string[] | null;

    id_not_in?: string[] | null;

    id_lt?: string | null;

    id_lte?: string | null;

    id_gt?: string | null;

    id_gte?: string | null;

    id_contains?: string | null;

    id_not_contains?: string | null;

    id_starts_with?: string | null;

    id_not_starts_with?: string | null;

    id_ends_with?: string | null;

    id_not_ends_with?: string | null;

    name?: string | null;

    name_not?: string | null;

    name_in?: string[] | null;

    name_not_in?: string[] | null;

    name_lt?: string | null;

    name_lte?: string | null;

    name_gt?: string | null;

    name_gte?: string | null;

    name_contains?: string | null;

    name_not_contains?: string | null;

    name_starts_with?: string | null;

    name_not_starts_with?: string | null;

    name_ends_with?: string | null;

    name_not_ends_with?: string | null;

    slug?: string | null;

    slug_not?: string | null;

    slug_in?: string[] | null;

    slug_not_in?: string[] | null;

    slug_lt?: string | null;

    slug_lte?: string | null;

    slug_gt?: string | null;

    slug_gte?: string | null;

    slug_contains?: string | null;

    slug_not_contains?: string | null;

    slug_starts_with?: string | null;

    slug_not_starts_with?: string | null;

    slug_ends_with?: string | null;

    slug_not_ends_with?: string | null;

    moderators_every?: UserWhereInput | null;

    moderators_some?: UserWhereInput | null;

    moderators_none?: UserWhereInput | null;

    author?: UserWhereInput | null;

    members_every?: UserWhereInput | null;

    members_some?: UserWhereInput | null;

    members_none?: UserWhereInput | null;

    channels_every?: ChannelWhereInput | null;

    channels_some?: ChannelWhereInput | null;

    channels_none?: ChannelWhereInput | null;

    createdAt?: DateTime | null;

    createdAt_not?: DateTime | null;

    createdAt_in?: DateTime[] | null;

    createdAt_not_in?: DateTime[] | null;

    createdAt_lt?: DateTime | null;

    createdAt_lte?: DateTime | null;

    createdAt_gt?: DateTime | null;

    createdAt_gte?: DateTime | null;

    updatedAt?: DateTime | null;

    updatedAt_not?: DateTime | null;

    updatedAt_in?: DateTime[] | null;

    updatedAt_not_in?: DateTime[] | null;

    updatedAt_lt?: DateTime | null;

    updatedAt_lte?: DateTime | null;

    updatedAt_gt?: DateTime | null;

    updatedAt_gte?: DateTime | null;

    confirmed?: boolean | null;

    confirmed_not?: boolean | null;

    online?: boolean | null;

    online_not?: boolean | null;

    AND?: TeamWhereInput[] | null;

    OR?: TeamWhereInput[] | null;

    NOT?: TeamWhereInput[] | null;
}

export interface ChannelWhereInput {
    id?: string | null;

    id_not?: string | null;

    id_in?: string[] | null;

    id_not_in?: string[] | null;

    id_lt?: string | null;

    id_lte?: string | null;

    id_gt?: string | null;

    id_gte?: string | null;

    id_contains?: string | null;

    id_not_contains?: string | null;

    id_starts_with?: string | null;

    id_not_starts_with?: string | null;

    id_ends_with?: string | null;

    id_not_ends_with?: string | null;

    name?: string | null;

    name_not?: string | null;

    name_in?: string[] | null;

    name_not_in?: string[] | null;

    name_lt?: string | null;

    name_lte?: string | null;

    name_gt?: string | null;

    name_gte?: string | null;

    name_contains?: string | null;

    name_not_contains?: string | null;

    name_starts_with?: string | null;

    name_not_starts_with?: string | null;

    name_ends_with?: string | null;

    name_not_ends_with?: string | null;

    slug?: string | null;

    slug_not?: string | null;

    slug_in?: string[] | null;

    slug_not_in?: string[] | null;

    slug_lt?: string | null;

    slug_lte?: string | null;

    slug_gt?: string | null;

    slug_gte?: string | null;

    slug_contains?: string | null;

    slug_not_contains?: string | null;

    slug_starts_with?: string | null;

    slug_not_starts_with?: string | null;

    slug_ends_with?: string | null;

    slug_not_ends_with?: string | null;

    moderators_every?: UserWhereInput | null;

    moderators_some?: UserWhereInput | null;

    moderators_none?: UserWhereInput | null;

    public?: boolean | null;

    public_not?: boolean | null;

    messages_every?: MessageWhereInput | null;

    messages_some?: MessageWhereInput | null;

    messages_none?: MessageWhereInput | null;

    members_every?: UserWhereInput | null;

    members_some?: UserWhereInput | null;

    members_none?: UserWhereInput | null;

    author?: UserWhereInput | null;

    createdAt?: DateTime | null;

    createdAt_not?: DateTime | null;

    createdAt_in?: DateTime[] | null;

    createdAt_not_in?: DateTime[] | null;

    createdAt_lt?: DateTime | null;

    createdAt_lte?: DateTime | null;

    createdAt_gt?: DateTime | null;

    createdAt_gte?: DateTime | null;

    updatedAt?: DateTime | null;

    updatedAt_not?: DateTime | null;

    updatedAt_in?: DateTime[] | null;

    updatedAt_not_in?: DateTime[] | null;

    updatedAt_lt?: DateTime | null;

    updatedAt_lte?: DateTime | null;

    updatedAt_gt?: DateTime | null;

    updatedAt_gte?: DateTime | null;

    AND?: ChannelWhereInput[] | null;

    OR?: ChannelWhereInput[] | null;

    NOT?: ChannelWhereInput[] | null;
}

export interface MessageWhereInput {
    id?: string | null;

    id_not?: string | null;

    id_in?: string[] | null;

    id_not_in?: string[] | null;

    id_lt?: string | null;

    id_lte?: string | null;

    id_gt?: string | null;

    id_gte?: string | null;

    id_contains?: string | null;

    id_not_contains?: string | null;

    id_starts_with?: string | null;

    id_not_starts_with?: string | null;

    id_ends_with?: string | null;

    id_not_ends_with?: string | null;

    body?: string | null;

    body_not?: string | null;

    body_in?: string[] | null;

    body_not_in?: string[] | null;

    body_lt?: string | null;

    body_lte?: string | null;

    body_gt?: string | null;

    body_gte?: string | null;

    body_contains?: string | null;

    body_not_contains?: string | null;

    body_starts_with?: string | null;

    body_not_starts_with?: string | null;

    body_ends_with?: string | null;

    body_not_ends_with?: string | null;

    parentId?: string | null;

    parentId_not?: string | null;

    parentId_in?: string[] | null;

    parentId_not_in?: string[] | null;

    parentId_lt?: string | null;

    parentId_lte?: string | null;

    parentId_gt?: string | null;

    parentId_gte?: string | null;

    parentId_contains?: string | null;

    parentId_not_contains?: string | null;

    parentId_starts_with?: string | null;

    parentId_not_starts_with?: string | null;

    parentId_ends_with?: string | null;

    parentId_not_ends_with?: string | null;

    url?: string | null;

    url_not?: string | null;

    url_in?: string[] | null;

    url_not_in?: string[] | null;

    url_lt?: string | null;

    url_lte?: string | null;

    url_gt?: string | null;

    url_gte?: string | null;

    url_contains?: string | null;

    url_not_contains?: string | null;

    url_starts_with?: string | null;

    url_not_starts_with?: string | null;

    url_ends_with?: string | null;

    url_not_ends_with?: string | null;

    filetype?: string | null;

    filetype_not?: string | null;

    filetype_in?: string[] | null;

    filetype_not_in?: string[] | null;

    filetype_lt?: string | null;

    filetype_lte?: string | null;

    filetype_gt?: string | null;

    filetype_gte?: string | null;

    filetype_contains?: string | null;

    filetype_not_contains?: string | null;

    filetype_starts_with?: string | null;

    filetype_not_starts_with?: string | null;

    filetype_ends_with?: string | null;

    filetype_not_ends_with?: string | null;

    author?: UserWhereInput | null;

    createdAt?: DateTime | null;

    createdAt_not?: DateTime | null;

    createdAt_in?: DateTime[] | null;

    createdAt_not_in?: DateTime[] | null;

    createdAt_lt?: DateTime | null;

    createdAt_lte?: DateTime | null;

    createdAt_gt?: DateTime | null;

    createdAt_gte?: DateTime | null;

    updatedAt?: DateTime | null;

    updatedAt_not?: DateTime | null;

    updatedAt_in?: DateTime[] | null;

    updatedAt_not_in?: DateTime[] | null;

    updatedAt_lt?: DateTime | null;

    updatedAt_lte?: DateTime | null;

    updatedAt_gt?: DateTime | null;

    updatedAt_gte?: DateTime | null;

    AND?: MessageWhereInput[] | null;

    OR?: MessageWhereInput[] | null;

    NOT?: MessageWhereInput[] | null;
}

export enum UserRole {
    Admin = "ADMIN",
    Moderator = "MODERATOR",
    User = "USER"
}

export enum UserOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    EmailAsc = "email_ASC",
    EmailDesc = "email_DESC",
    SetPrivateAsc = "set_private_ASC",
    SetPrivateDesc = "set_private_DESC",
    UsernameAsc = "username_ASC",
    UsernameDesc = "username_DESC",
    PasswordAsc = "password_ASC",
    PasswordDesc = "password_DESC",
    ConfirmedAsc = "confirmed_ASC",
    ConfirmedDesc = "confirmed_DESC",
    OnlineAsc = "online_ASC",
    OnlineDesc = "online_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    RoleAsc = "role_ASC",
    RoleDesc = "role_DESC"
}

export type DateTime = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
    me?: string | null;

    fetchAPI?: ApiApplication | null;
}

export interface ApiApplication {
    id: string;

    admin: User;

    moderators?: User[] | null;

    name: string;

    token: string;

    createdAt: DateTime;

    updatedAt: DateTime;
}

export interface User {
    id: string;

    email: string;
}

export interface Mutation {
    register?: RegisterResponse | null;

    login?: LoginResponse | null;

    checkToken?: CheckTokenResponse | null;

    resetPassword?: ResetPasswordResponse | null;

    forgotPassword?: ForgotPasswordResponse | null;

    changePassword?: ChangePasswordResponse | null;

    authConfirmation?: AuthConfirmationResponse | null;

    logout?: boolean | null;

    createApi?: ApiApplication | null;

    resetTokenAPI?: ApiApplication | null;
}

export interface RegisterResponse {
    ok?: boolean | null;

    sentEmailMessage?: string | null;

    email?: string | null;
}

export interface LoginResponse {
    ok?: boolean | null;

    user?: User | null;

    token?: string | null;

    refreshToken?: string | null;
}

export interface CheckTokenResponse {
    ok?: boolean | null;

    result?: string | null;
}

export interface ResetPasswordResponse {
    ok?: boolean | null;

    result?: string | null;
}

export interface ForgotPasswordResponse {
    ok?: boolean | null;

    sentEmailMessage?: string | null;

    email?: string | null;
}

export interface ChangePasswordResponse {
    ok?: boolean | null;

    result?: string | null;
}

export interface AuthConfirmationResponse {
    ok?: boolean | null;

    result?: string | null;
}

// ====================================================
// Arguments
// ====================================================

export interface ModeratorsApiApplicationArgs {
    where?: UserWhereInput | null;

    orderBy?: UserOrderByInput | null;

    skip?: number | null;

    after?: string | null;

    before?: string | null;

    first?: number | null;

    last?: number | null;
}
export interface RegisterMutationArgs {
    username: string;

    password: string;

    email: string;
}
export interface LoginMutationArgs {
    email: string;

    password: string;

    tokens: boolean;
}
export interface CheckTokenMutationArgs {
    token: string;
}
export interface ResetPasswordMutationArgs {
    id: string;

    password: string;
}
export interface ForgotPasswordMutationArgs {
    email: string;
}
export interface ChangePasswordMutationArgs {
    email?: string | null;

    oldPassword?: string | null;

    newPassword?: string | null;
}
export interface AuthConfirmationMutationArgs {
    token?: string | null;
}
export interface CreateApiMutationArgs {
    name: string;
}
