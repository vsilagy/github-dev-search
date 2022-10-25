import location from '../assets/icon-location.svg';
import twitter from '../assets/icon-twitter.svg';
import website from '../assets/icon-website.svg';
import company from '../assets/icon-company.svg';
export default function ResultsCard(props) {
	return (
		<section className="max-w-xl mx-auto p-4 rounded-xl shadow-lg bg-white dark:bg-darkSaturatedBlue md:p-8 md:max-w-3xl">
			<div className="flex justify-start gap-8 mb-8 p-2 md:p-4">
				<img
					src={props.data.avatar_url}
					className="h-24 w-24 rounded-full md:h-36 md:w-36"
				/>
				<div className="flex flex-col gap-4  md:flex-row md:justify-between md:flex-1">
					<div>
						<h2 className="text-2xl  font-bold mb-1 md:text-3xl">
							{props.data.name}
						</h2>
						<h3 className="text-sm text-blueish md:-text-base">
							@{props.data.login}
						</h3>
					</div>
					<p className="text-sm md:text-base ">
						{props.data.created_at.slice(0, 10)}
					</p>
				</div>
			</div>
			<div className="ml-0 md:ml-44">
				<p className="mx-2 my-6 dark:text-white md:mx-4 md:-mt-24">
					{props.data.bio}
				</p>
				<div className="grid grid-cols-3 gap-2 mx-2 my-4 px-4 py-4 text-sm rounded-xl bg-saturatedWhite  dark:bg-veryDarkBlue md:text-base md:gap-4 md:mx-4 md:my-8 md:px-8">
					<p>Repos</p>
					<p>Followers</p>
					<p>Following</p>
					<p className="font-bold">{props.data.public_repos}</p>
					<p className="font-bold">{props.data.followers}</p>
					<p className="font-bold">{props.data.following}</p>
				</div>

				<div className="grid grid-cols-1 gap-4 mx-2 text-sm md:grid-cols-2 md:gap-6 md:mx-4 md:text-base">
					<div className="flex gap-4 items-center">
						<img src={location} className="w-5 md:h-6" />
						<p>{props.data.location}</p>
					</div>
					<div className="flex gap-4 items-center">
						<img src={twitter} className="w-5 md:w-6" />
						<p>{props.data.twitter_username}</p>
					</div>
					<div className="flex gap-4  items-center">
						<img src={website} className="w-5 md:w-6" />
						<p>{props.data.blog}</p>
					</div>
					<div className="flex gap-4  items-center">
						<img src={company} className="w-5 md:w-6" />
						<p>{props.data.company}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
