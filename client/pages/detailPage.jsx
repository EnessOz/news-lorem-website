import React from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../imports/ui/apiProvider';
import { ContentRecommendations } from '../components/contentRecommendations';
import { CaptionPhoto } from '../components/captionPhoto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const DetailPage = () => {
    const { data, loading, error } = useApi();
    const { id } = useParams();

    if (loading) {
        return <div><FontAwesomeIcon icon={faSpinner} spin /></div>;
    }

    if (error) {
        return <div >Error: {error.message}</div>;
    }

    const newsFind = data.result.find(item => item.key === id);

    if (!newsFind) {
        return <div>Haber bulunamadı!</div>;
    }

    return (
        <div>
            {newsFind && (
                <>
                    <div className='d-flex flex-column w-100 d-flex custom-class mb-5' style={{ height: "400px" }}>
                        <div className='d-flex flex-column w-100 justify-content-center align-items-center mb-5'>
                            <h4 className='text-white text-uppercase'>{newsFind.name}</h4>
                            <img src={newsFind.image} alt={newsFind.name} style={{ height: "400px" }}></img>
                        </div>
                    </div>
                    <div className='d-flex flex-column w-100 d-flex custom-class-detail'>
                        <div className='d-flex my-5'>
                            <div className='w-75'>
                                <p>{newsFind.description}</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non fugiat expedita laudantium sit, sed amet necessitatibus. Animi, voluptatem nemo. Doloremque reprehenderit iure sit. A animi quam quos dicta aspernatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nulla? Officiis similique error necessitatibus nesciunt natus rerum repellat, laudantium tenetur provident facilis inventore eum maiores ab, eaque voluptate at dicta? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum doloribus corporis eligendi earum ducimus blanditiis fugiat est sunt sit repellendus. Fugiat enim sequi distinctio doloremque veritatis quod! Alias, at praesentium!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non fugiat expedita laudantium sit, sed amet necessitatibus. Animi, voluptatem nemo. Doloremque reprehenderit iure sit. A animi quam quos dicta aspernatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nulla? Officiis similique error necessitatibus nesciunt natus rerum repellat, laudantium tenetur provident facilis inventore eum maiores ab, eaque voluptate at dicta? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum doloribus corporis eligendi earum ducimus blanditiis fugiat est sunt sit repellendus. Fugiat enim sequi distinctio doloremque veritatis quod! Alias, at praesentium!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non fugiat expedita laudantium sit, sed amet necessitatibus. Animi, voluptatem nemo. Doloremque reprehenderit iure sit. A animi quam quos dicta aspernatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nulla? Officiis similique error necessitatibus nesciunt natus rerum repellat, laudantium tenetur provident facilis inventore eum maiores ab, eaque voluptate at dicta? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum doloribus corporis eligendi earum ducimus blanditiis fugiat est sunt sit repellendus. Fugiat enim sequi distinctio doloremque veritatis quod! Alias, at praesentium!</p>
                                <CaptionPhoto />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non fugiat expedita laudantium sit, sed amet necessitatibus. Animi, voluptatem nemo. Doloremque reprehenderit iure sit. A animi quam quos dicta aspernatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nulla? Officiis similique error necessitatibus nesciunt natus rerum repellat, laudantium tenetur provident facilis inventore eum maiores ab, eaque voluptate at dicta? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum doloribus corporis eligendi earum ducimus blanditiis fugiat est sunt sit repellendus. Fugiat enim sequi distinctio doloremque veritatis quod! Alias, at praesentium!</p>
                                <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non fugiat expedita laudantium sit, sed amet necessitatibus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non fugiat expedita laudantium sit, sed amet necessitatibus. Animi, voluptatem nemo. Doloremque reprehenderit iure sit. A animi quam quos dicta aspernatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nulla? Officiis similique error necessitatibus nesciunt natus rerum repellat, laudantium tenetur provident facilis inventore eum maiores ab, eaque voluptate at dicta? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum doloribus corporis eligendi earum ducimus blanditiis fugiat est sunt sit repellendus. Fugiat enim sequi distinctio doloremque veritatis quod! Alias, at praesentium!</p>
                            </div>
                            <div className='w-25'>
                                <ContentRecommendations
                                    sliceCount={2}
                                    containerClass="d-flex flex-column"
                                    innerContainerClass="my-0"
                                    innerContainerDetailClass="justify-content-end"
                                    cardClass="border"
                                    title="Sizin için Tavsiye"
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className='w-25 px-5'>
                <ContentRecommendations
                    sliceCount={5}
                    containerClass="d-flex flex-row mx-5"
                    innerContainerClass=""
                    innerContainerDetailClass=""
                    cardClass=""
                    title=""

                />
            </div>
        </div>
    );
};
