<?php

namespace App\Entity;

use App\Repository\PostRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 */
class Post
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=250)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=250, unique=true)
     */
    private $slug;

    /**
     * @ORM\OneToMany(targetEntity=PostBlock::class, mappedBy="post", orphanRemoval=true, cascade={"persist", "remove"})
     */
    private $body;

    /**
     * @ORM\ManyToMany(targetEntity=Tag::class)
     */
    private $tags;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class)
     */
    private $categories;

    /**
     * @ORM\ManyToOne(targetEntity=Image::class)
     */
    private $cover;

    /**
     * @ORM\Column(type="bigint")
     */
    private $created;

    /**
     * @ORM\Column(type="bigint", nullable=true)
     */
    private $updated;

    /**
     * @ORM\Column(type="boolean")
     */
    private $hidden;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_description;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $meta_robots;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_canonical;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_og_title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_twitter_title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_og_description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_twitter_description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_og_image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_twitter_image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_og_url;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meta_twitter_card;

    public function __construct()
    {
        $this->body = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->categories = new ArrayCollection();
    }

    public static function newWithParams($title, $slug, $hidden, $cover, $blocks) {
        $new = new Post();
        $new->setTitle($title);
        $new->setSlug($slug);
        $new->setHidden($hidden);
        $new->setCover($cover);
        $new->setCreated('300000');
        $priority = 0;
        foreach ($blocks as $block) {
            $_block = PostBlock::newWithParams($new, $block['type'], $block['text'], $block['images'], $priority);
            $new->addBody($_block);
            $priority++;
        }
        return $new;
    }

    public function getFullValues() {
        $_blocks = $this->getBody();
        $_body = [];
        foreach ($_blocks as $_block) {
            $_body[] = $_block->getFullValues();
        }
        return [
            'id'=>$this->getId(),
            'title'=>$this->getTitle(),
            'slug'=>$this->getSlug(),
            'created'=>$this->getCreated(),
            'updated'=>$this->getUpdated(),
            'hidden'=>$this->getHidden(),
            'body'=>$_body
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return Collection|PostBlock[]
     */
    public function getBody(): Collection
    {
        return $this->body;
    }

    public function addBody(PostBlock $body): self
    {
        if (!$this->body->contains($body)) {
            $this->body[] = $body;
            $body->setPost($this);
        }

        return $this;
    }

    public function removeBody(PostBlock $body): self
    {
        if ($this->body->removeElement($body)) {
            // set the owning side to null (unless already changed)
            if ($body->getPost() === $this) {
                $body->setPost(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        $this->tags->removeElement($tag);

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        $this->categories->removeElement($category);

        return $this;
    }

    public function setCover($cover)
    {
        $this->cover = $cover;
    }

    public function getCover() {
        return $this->cover;
    }

    public function getCreated(): ?string
    {
        return $this->created;
    }

    public function setCreated(string $created): self
    {
        $this->created = $created;

        return $this;
    }

    public function getUpdated(): ?string
    {
        return $this->updated;
    }

    public function setUpdated(?string $updated): self
    {
        $this->updated = $updated;

        return $this;
    }

    public function getHidden(): ?bool
    {
        return $this->hidden;
    }

    public function setHidden(bool $hidden): self
    {
        $this->hidden = $hidden;

        return $this;
    }

    public function getMetaTitle(): ?string
    {
        return $this->meta_title;
    }

    public function setMetaTitle(?string $meta_title): self
    {
        $this->meta_title = $meta_title;

        return $this;
    }

    public function getMetaDescription(): ?string
    {
        return $this->meta_description;
    }

    public function setMetaDescription(?string $meta_description): self
    {
        $this->meta_description = $meta_description;

        return $this;
    }

    public function getMetaRobots(): ?string
    {
        return $this->meta_robots;
    }

    public function setMetaRobots(string $meta_robots): self
    {
        $this->meta_robots = $meta_robots;

        return $this;
    }

    public function getMetaCanonical(): ?string
    {
        return $this->meta_canonical;
    }

    public function setMetaCanonical(?string $meta_canonical): self
    {
        $this->meta_canonical = $meta_canonical;

        return $this;
    }

    public function getMetaOgTitle(): ?string
    {
        return $this->meta_og_title;
    }

    public function setMetaOgTitle(?string $meta_og_title): self
    {
        $this->meta_og_title = $meta_og_title;

        return $this;
    }

    public function getMetaTwitterTitle(): ?string
    {
        return $this->meta_twitter_title;
    }

    public function setMetaTwitterTitle(?string $meta_twitter_title): self
    {
        $this->meta_twitter_title = $meta_twitter_title;

        return $this;
    }

    public function getMetaOgDescription(): ?string
    {
        return $this->meta_og_description;
    }

    public function setMetaOgDescription(?string $meta_og_description): self
    {
        $this->meta_og_description = $meta_og_description;

        return $this;
    }

    public function getMetaTwitterDescription(): ?string
    {
        return $this->meta_twitter_description;
    }

    public function setMetaTwitterDescription(?string $meta_twitter_description): self
    {
        $this->meta_twitter_description = $meta_twitter_description;

        return $this;
    }

    public function getMetaOgImage(): ?string
    {
        return $this->meta_og_image;
    }

    public function setMetaOgImage(?string $meta_og_image): self
    {
        $this->meta_og_image = $meta_og_image;

        return $this;
    }

    public function getMetaTwitterImage(): ?string
    {
        return $this->meta_twitter_image;
    }

    public function setMetaTwitterImage(?string $meta_twitter_image): self
    {
        $this->meta_twitter_image = $meta_twitter_image;

        return $this;
    }

    public function getMetaOgUrl(): ?string
    {
        return $this->meta_og_url;
    }

    public function setMetaOgUrl(?string $meta_og_url): self
    {
        $this->meta_og_url = $meta_og_url;

        return $this;
    }

    public function getMetaTwitterCard(): ?string
    {
        return $this->meta_twitter_card;
    }

    public function setMetaTwitterCard(?string $meta_twitter_card): self
    {
        $this->meta_twitter_card = $meta_twitter_card;

        return $this;
    }
    
}
